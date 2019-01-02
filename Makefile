U4TOJS=dotnet tools/u4tojs/u4tojs/bin/Debug/netcoreapp2.1/u4tojs.dll

maps/%.js: resources/%.ULT data/%.js resources/%.TLK
	$(U4TOJS) $@ $^

all: maps/WORLD.js maps/BRITAIN.js maps/PAWS.js maps/SKARA.js maps/YEW.js maps/LYCAEUM.js

clean:
	rm maps/*

maps/WORLD.js: resources/WORLD.MAP data/WORLD.js
	$(U4TOJS) $@ $^

