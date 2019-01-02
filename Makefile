U4TOJS=dotnet tools/u4tojs/u4tojs/bin/Debug/netcoreapp2.1/u4tojs.dll

all: maps/world.js maps/britain.js maps/paws.js

clean:
	rm maps/*

maps/world.js: resources/WORLD.MAP data/world.js
	$(U4TOJS) $^ $@

maps/britain.js: resources/BRITAIN.ULT data/britain.js
	$(U4TOJS) $^ $@

maps/paws.js: resources/PAWS.ULT data/paws.js
	$(U4TOJS) $^ $@
