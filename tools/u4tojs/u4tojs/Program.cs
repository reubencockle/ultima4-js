using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;

namespace u4tojs
{
	class Program
	{
		static void Usage()
		{
			Console.WriteLine(@"
u4tojs - convert Ultima 4 maps to javascript

USAGE: u4tojs <js-file> <data-file> <map-file> [<talk-file>]
");
		}

		static void Main(string[] args)
		{
			if (args.Length < 3 || args.Length>4) { Usage(); return; }

			try
			{
				var world = args[1];
				var datafile = args[2];
				var jsmap = args[0];
				var tmpfile = jsmap + ".tmp";

				Console.WriteLine($"Loading {world}...");
				var map = File.ReadAllBytes(world);
				StreamWriter s = new StreamWriter(tmpfile);
				var name = Path.GetFileNameWithoutExtension(datafile).ToLowerInvariant();
				s.WriteLine($"maps[\"{name}\"] = {{");

				int mapWidth = 0;
				int mapHeight = 0;
				var dat = new StreamReader(datafile);
				string line;
				while ((line = dat.ReadLine()) != null)
				{
					s.WriteLine(line);

					var match = Regex.Match(line, @"^(\w\w*)\s*:\s*(\d\d*)");
					if (match.Success)
					{
						switch (match.Groups[1].Value)
						{
							case "width":
								if (mapWidth == 0) mapWidth = Convert.ToInt32(match.Groups[2].Value);
								break;

							case "height":
								if (mapHeight == 0) mapHeight = Convert.ToInt32(match.Groups[2].Value);
								break;
						}
					}
				}
				dat.Close();

				if (mapWidth == 0 || mapHeight == 0) throw new ArgumentException($"Map width or height not defined in {datafile}");
				s.WriteLine("data:\"\\");

				for (int y = 0; y < mapHeight; y++)
				{
					for (int x = 0; x < mapWidth; x++)
					{
						var b = getTile(map, x, y);
						s.Write(b.ToString("X2"));
					}
					s.WriteLine("\\");
				}
				s.WriteLine("\",");

				// Load people
				// - blocks of 32 bytes for up to 32 townsfolk as follows:
				//   tiles, x, y, prev-tiles, x, y, movement, dialog, z
				List<Person> folk = new List<Person>();
				const int N = 32;
				Person[] people = new Person[N];
				if (world.EndsWith(".ULT", StringComparison.InvariantCultureIgnoreCase))
				{
					// Load talk file - each record is 288 bytes (0x120)
					var talk = File.ReadAllBytes(args[3]);

					var q = mapWidth * mapHeight;

					// Load tiles
					for (int i = 0; i < N; i++, q++)	people[i] = new Person { tile = map[q] };
					for (int i = 0; i < N; i++, q++) people[i].startX = map[q];
					for (int i = 0; i < N; i++, q++) people[i].startY = map[q];
					for (int i = 0; i < N; i++, q++) people[i].prevTile = map[q];
					for (int i = 0; i < N; i++, q++) people[i].x = map[q];
					for (int i = 0; i < N; i++, q++) people[i].y = map[q];
					for (int i = 0; i < N; i++, q++) people[i].behaviour = GetBehaviour(map[q]);
					for (int i = 0; i < N; i++, q++) if(people[i].tile!=0) LoadResponses(people[i], talk, map[q]);

					for (int i = 0; i < N; i++)
						if (people[i].tile != 0) folk.Add(people[i]);
				}
				var j = new JsonSerializerSettings
				{
					NullValueHandling = NullValueHandling.Ignore
				};
				s.WriteLine("folk:{0}", JsonConvert.SerializeObject(folk, Formatting.Indented, j));
				s.WriteLine("};");

				s.Flush();
				s.Close();

				if (File.Exists(jsmap))
					File.Delete(jsmap);
				File.Move(tmpfile, jsmap);
			}
			catch (Exception ex)
			{
				Console.WriteLine($"ERROR: {ex}");
				Console.WriteLine("run without arguments for usage");
			}
		}

		private static void LoadResponses(Person person, byte[] talk, byte index)
		{
			if (index == 0) return;

			Console.Write($"\t#{index,02}...");
			int Q = ((int)index - 1) * 288;
			int q = Q + 3;
			if (Q > talk.Length)
				throw new Exception($"Talk index {index} is greater than map file size {talk.Length}");

			Func<string> getNext = () =>
			{
				StringBuilder s = new StringBuilder(32);
				byte c;
				while ((c=talk[q++]) != 0)
					s.Append((Char)c);
				
				return s.ToString();
			};

			var name = getNext();
			Console.WriteLine(name);
			person.responses.Add("NAME", name);
			person.heShe = getNext();
			person.description = getNext();
			person.responses.Add("JOB", getNext());
			person.responses.Add("HEAL", getNext());
			string response1 = getNext();
			string response2 = getNext();
			string question = getNext();
			string yes = getNext();
			string no = getNext();
			string input1 = getNext();
			string input2 = getNext();

			if (!string.IsNullOrWhiteSpace(input1)) person.responses.TryAdd(input1.Trim(), response1);
			if (!string.IsNullOrWhiteSpace(input2)) person.responses.TryAdd(input2.Trim(), response2);

			// Folk only have 0 or 1 question in U4
			string questionIndex = null;
			switch (talk[Q])
			{
				case 3:
					questionIndex = "JOB";
					break;
				case 4:
					questionIndex = "HEAL";
					break;
				case 5:
					questionIndex = input1;
					break;
				case 6:
					questionIndex = input2;
					break;
			}
			if (!string.IsNullOrEmpty(questionIndex))
				person.questions.Add(questionIndex, new Question { text = question, yes = yes, no = no });
		}


		private static string GetBehaviour(byte v)
		{
			switch (v) {
				case 0: return "Static";
				case 1: return "Wander";
				case 0x80: return "Follow";
				case 0xFF: return "Attack";
				default: return "";
			}
		}

		/// <summary>
		/// Gets a tile from the map converting from absolute coords to (32 x 32 byte) blocks
		/// </summary>
		static byte getTile(byte[] map, int x, int y)
		{
			int bx = x >> 5;
			int by = y >> 5;
			int dx = x & 31;
			int dy = y & 31;
			int a = (by * 8 + bx) * 32 * 32 + dy * 32 + dx;
			return map[a];
		}
	}

	class Person {
		public string heShe;
		public string description;
		public int startX;
		public int startY;
		public int x;
		public int y;
		public int tile;
		public int prevTile;
		public string behaviour;// Static, Wander, Follow, Attack
		public Dictionary<string, string> responses = new Dictionary<string, string>();
		public Dictionary<string, Question> questions = new Dictionary<string, Question>();
	}

	class Question
	{
		public string text;
		public string yes;
		public string no;
	}
}