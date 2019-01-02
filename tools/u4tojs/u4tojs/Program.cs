using System;
using System.IO;
using System.Text.RegularExpressions;

namespace u4tojs
{
	class Program
	{
		static void Usage()
		{
			Console.WriteLine(@"
u4tojs - convert Ultima 4 maps to javascript

USAGE: u4tojs <data-file> <map-file> <js-file>
");
		}

		static void Main(string[] args)
		{
			if (args.Length != 3) { Usage(); return; }

			try
			{
				var world = args[0];
				var datafile = args[1];
				var jsmap = args[2];

				Console.WriteLine($"Loading {world}...");
				var map = File.ReadAllBytes(world);
				StreamWriter s = new StreamWriter(jsmap);
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
				s.WriteLine("\"};");
				s.Flush();
				s.Close();
			}
			catch (Exception ex)
			{
				Console.WriteLine($"ERROR: {ex.Message}");
				Console.WriteLine("run without arguments for usage");
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
}