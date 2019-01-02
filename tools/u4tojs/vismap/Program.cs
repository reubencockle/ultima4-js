using System;

namespace vismap
{
	class Program
	{
		static void Main(string[] args)
		{
			int width = 11;
			int height = 11;
			int offsetX = width / 2;
			int offsetY = height / 2;
			string s =
			"..........." +
			"..........." +
			"..........." +
			"..........." +
			".....#....." +
			"..#..X....." +
			".........#." +
			".........#." +
			"...##....#." +
			"..........." +
			"...........";
			var map = new Map<char>(width, height, s.ToCharArray());
			var vis = new Map<int>(width, height);

			for (int size = 1; size <= 5; size++)
			{
				dovis(size*2, -size, -size, 1, 0, vis, map);
				dovis(size * 2, size, -size, 0, 1, vis, map);
				dovis(size * 2, size, size, -1, 0, vis, map);
				dovis(size * 2, -size, size, 0, -1, vis, map);

				//// top
				//for (int x = -size; x < size; x++)
				//{
				//	int c = map.get(x, -size) == '#' ? 1 : 0;
				//	int v = vis.get(x - sign(x), -size + 1);
				//	vis.set(x, -size, c+v);
				//}

				//// rigth
				//for (int y = -size; y < size; y++)
				//{
				//	int c = map.get(size, y) == '#' ? 1 : 0;
				//	int v = vis.get(size-1, y-sign(y));
				//	vis.set(size, y, c+v);
				//}

				//// bottom
				//for (int x = size; x > -size; x--)
				//{
				//	int c = map.get(x, size) == '#' ? 1 : 0;
				//	int v = vis.get(x-sign(x), size-1);
				//	vis.set(x, size, c+v);
				//}

				//// left
				//for (int y = size; y > -size; y--)
				//{
				//	int c = map.get(-size, y) == '#' ? 1 : 0;
				//	int v = vis.get(-size + 1, y - sign(y));
				//	vis.set(-size, y, c+v);
				//}
			}
		}

		static void dovis(int n, int x, int y, int dx, int dy, Map<int> vis, Map<char> map)
		{
			for (int i = 0; i < n; i++)
			{
				int c = map.get(x, y) == '#' ? 1 : 0;
				int v = vis.get(x - sign(x), y - sign(y));
				vis.set(x, y, c + v);
				x += dx;
				y += dy;
			}
		}

		static int slope(int x, int y)
		{
			double d = (double)x / (double)y;
			return (int)Math.Round(d);
		}

		int getVis(int[] vis, int x, int y, int w, int h)
		{
			return vis[y * w + x];
		}
		static int sign(int i)
		{
			return i < 0 ? -1 : i > 0 ? 1 : 0;
		}
	}

	class Map<T> {
		T[] map;
		int width;
		int height;
		int offsetX;
		int offsetY;

		public Map(int width, int height, T[] map = null)
		{
			this.width = width;
			this.height = height;
			this.offsetX = width / 2;
			this.offsetY = height / 2;
			this.map = map!=null ? map : new T[width * height];
		}

		public T get(int x, int y)
		{
			return map[(y+offsetY) * width + (x+offsetX)];
		}

		public void set(int x, int y, T c)
		{
			map[(y + offsetY) * width + (x + offsetX)] = c;
			draw();

		}

		public void draw()
		{
			Console.Clear();
			for (int y = 0; y < height; y++)
			{
				for (int x = 0; x < width; x++)
				{
					Console.Write(get(x-offsetX, y-offsetY));
				}
				Console.WriteLine();
			}
			System.Threading.Thread.Sleep(100);
		}
	}
}