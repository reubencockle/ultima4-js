U4TOJS=dotnet tools/u4tojs/u4tojs/bin/Debug/netcoreapp2.1/u4tojs.dll

maps/%.js: resources/%.ULT data/%.js resources/%.TLK
	$(U4TOJS) $@ $^

all: maps/WORLD.js maps/BRITAIN.js maps/PAWS.js maps/SKARA.js maps/YEW.js maps/LYCAEUM.js maps/LCB_1.js maps/LCB_2.js maps/VESPER.js

clean:
	rm maps/*

maps/WORLD.js: resources/WORLD.MAP data/WORLD.js
	$(U4TOJS) $@ $^

maps/LCB_1.js: resources/LCB_1.ULT data/LCB_1.js resources/LCB.TLK
	$(U4TOJS) $@ $^

maps/LCB_2.js: resources/LCB_2.ULT data/LCB_2.js resources/LCB.TLK
	$(U4TOJS) $@ $^
