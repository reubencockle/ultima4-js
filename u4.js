/*
   Map is loaded from js and must define the following properties:
   width, height - size of map
   x, y          - starting position on map
   wrap          - whether this map wraps
   data          - single string of hex digits - each tile is 2 hex digits, which represents 1 byte
 */
var map = maps["world"];
var mapStack = [];
var viewWidth= 11;
var viewHeight = 11;
var viewX = map.x;
var viewY = map.y;
var grid = undefined;
var mouseSpeed = 50;

var party = {
transport: 0, vis: 1, creative: false,
};


function init() {
	grid = document.getElementById("map");
	var gridHtml = "";
	var y = 0;
	var x = 0;
	for(y=0; y<viewHeight; y++) {
		gridHtml += "<tr>";
		for(x=0; x<viewWidth; x++) {
			gridHtml += "<td id=\"g"+y+x+"\" width=\"32px\" height=\"32px\" style=\"background-image:url('ultima_4_iv_quest_of_the_avatar_tileset.png')\"></td>";
		}
		gridHtml += "</tr>";
	}
	grid.innerHTML = gridHtml;

	var move = document.getElementById("movement");
	grid.addEventListener("mousemove", mouseMove);
	grid.addEventListener("mousedown", mouseDown);
	grid.addEventListener("mouseup", mouseUp);
	grid.addEventListener("mouseout", mouseOut);

	var main = document.getElementById("main");
	main.addEventListener("keydown", keydown);
	draw();

	feedbackPrompt("> ");
	//var music = document.getElementById("music");
	//music.autoplay=true;
	//music.loop=true;
	//music.load();
	//setTimeout( function(){ music.play(); }, 3000);
}

function debug(msg) {
	var e = document.getElementById("debug");
	if(e==null) return;
	e.innerText = msg;
}

//-------------------------------------------------------------
// input
//-------------------------------------------------------------

var inputMode = 0;	// 0 = key, 1 = line, 2 = callback
var inputCallback = null;
var inputLine = "";

function keydown(event) {
	debug("Key = "+event.key);
	input(event.key);
}

function getDir(msg, f) {
	feedback(msg+" - ");
	inputCallback = function(c) {
		switch(c) {
		case "ArrowLeft":
			feedback("West");
			feedbackPrompt("");
			f(-1,0);
			break;
		case "ArrowRight":
			feedback("East");
			feedbackPrompt("");
			f(1,0);
			break;
		case "ArrowUp":
			feedback("North");
			feedbackPrompt("");
			f(0,-1);
			break;
		case "ArrowDown":
			feedback("South");
			feedbackPrompt("");
			f(0,1);
			break;
		default:
			feedback("Cancel");
			break;
		}
	};
	inputMode = 2;
}

function input(c) {
	switch(inputMode) {
		case 0:	// single key command
			command(c);
			break;

		case 1:	// line mode
			if(c=="Enter") {
				var f = inputCallback;
				f(inputLine);
				inputLine = "";
				break;
			}
			inputLine += c;
			feedback(c);
			break;

		case 2:
			if(inputCallback==null) {
				feedback("Bug!");
				break;
			}
			var f = inputCallback;
			inputCallback = null;
			inputMode = 0;
			f(c);
			break;
	}

	if(inputMode==0) {
		moveAI();
		draw();
		feedbackPrompt("> ");
	}
}

//-------------------------------------------------------------
// commands
//-------------------------------------------------------------

function command(c) {
	switch(c) {
		case "1":
			move(-1,1);
			break;

		case "2":
		case "ArrowDown":
			move(0,1);
			break;

		case "3":
			move(1,1);
			break;

		case "4":
		case "ArrowLeft":
			move(-1,0);
			break;

		case "5":
			doTileAction();
			break;

		case "6":
		case "ArrowRight":
			move(1,0);
			break;

		case "7":
			move(-1,-1);
			break;

		case "8":
		case "ArrowUp":	
			move(0,-1);
			break;

		case "9":
			move(1,-1);
			break;

		case "d":
			descend();
			break;

		case "e":
			enter();
			break;

		case "k":
			climb();
			break;

		case "t":
			getDir("Talk", talk);
			break;

		case "`":
			creative();
			break;
	}
}

function creative() {
	if(!party.creative) {
		party.creative = true;
		party.vis = 99;
		party.transport = 1;
		feedback("Creative mode enabled");
	}
	else {
		party.creative = false;
		party.vis = 1;
		party.transport = 0;
		feedback("Creative mode disabled");
	}
}

function switchMap(name) {
	var m = maps[name.toLowerCase()];
	if(m==null) {
		feedback("BUG: map ["+name+"] not found!");
		return false;
	}
	map = m;
	return true;
}

function enter() {
	let locations = map.locations;
	if(locations == null) return;
	var i; for(i=0; i<locations.length; i++) {
		var loc = locations[i];
		if(loc.x==viewX && loc.y==viewY) {
			var town = loc.name;
			feedback("Enter - "+town);
			// save current map location
			mapStack.push({map:map, x:viewX, y:viewY});

			if(switchMap(town)) {
				viewX = map.x;
				viewY = map.y;
			}
			return;
		}
	}
	feedback("Enter What?");
}

function leave() {
	var ms = mapStack.pop();
	if(ms==null) {
		feedback("Can't leave!");
		return;
	}

	map = ms.map;
	viewX = ms.x;
	viewY = ms.y;
}

function climb() {
	var t = getMap(viewX, viewY);
	if((t == 27 || party.creative) && map.up!=null) {
		feedback("Klimb");
		switchMap(map.up);
	}
	else
		feedback("Klimb what?");
}

function descend() {
	var t = getMap(viewX, viewY);
	if((t == 27 || party.creative) && map.down!=null) {
		feedback("Descend");
		switchMap(map.down);
	}
	else
		feedback("Descend what?");
}

function talk(dx, dy) {
	var x = saneX(viewX+dx);
	var y = saneY(viewY+dy);
	var ai = getAI(x, y);
	if(ai==null) {
		feedback("Funny, no response!");
		return;
	}

	feedback("You meet "+ai.description);
	inputMode = 1;
	feedbackPrompt("- ");
	inputCallback = function (line) {
		if(line=="" || line=="bye") {
			feedbackPrompt("");
			feedback("Bye");
			inputMode = 0;
			return;
		}

		var say = line.toUpperCase().substr(0,4);
		var r = ai.responses[say];
		if(r == null) {
			feedbackPrompt("");
			feedback("That I cannot help thee with.");
			feedbackPrompt("- ");
			return;
		}

		feedbackPrompt("");
		feedback(r);

		var q = ai.questions[say];
		if(q != null) {
			feedbackPrompt("");
			feedback(q.text+"? ");

			var save = inputCallback;
			inputCallback = function(line) {
				if(line[0]=="y") {
					feedbackPrompt("");
					feedback(q.yes);
					feedbackPrompt("- ");
					inputCallback = save;
				}
				else if(line[0]=="n") {
					feedbackPrompt("");
					feedback(q.no);
					feedbackPrompt("- ");
					inputCallback = save;
				}
				else {
					feedbackPrompt("");
					feedback("Yes or no? ");
				}
			};
		}

		feedbackPrompt("- ");
	};
}

var mouseState = 0;
var mouseDX = 0;
var mouseDY = 0;
var mouseDir = -1;
var moveTimer = undefined;

function mouseDown(event) {
	mouseMove(event);
	mouseState = 1;
	mapMove();
}

function mapMove() {
	switch(mouseState) {
		case 2:
			mouseState=1;
			setTimeout(mapMove, mouseSpeed);
			break;

		case 1:
			move(mouseDX, mouseDY);
			mouseState=2;
			setTimeout(mapMove, mouseSpeed);
			break;

		case 0:
			return;
	} 
}

function mouseUp(event) {
	mouseState = 0;
	window.clearInterval(moveTimer);
}

function mouseOut(event) {
	var x = event.x - grid.offsetLeft;
	var y = event.y - grid.offsetTop;
	// stop moving if mouse has move out of the grid region - mouseOut alone is insufficient as it detects at the cell level
	if(x<0 || x>grid.clientWidth || y<0 || y>grid.clientHeight) mouseState = 0;
}

function mouseMove(event) {
	var x = event.x - grid.offsetLeft - grid.clientWidth/2;
	var y = event.y - grid.offsetTop - grid.clientHeight/2;
	var m = document.getElementById("mouse");
	var a = Math.round(Math.atan2(y, x) * 4 / Math.PI);
	mouseDir = a+4 & 7;
	m.innerText = "x="+x+", y="+y+", a="+mouseDir;

	if(x>-16 && x<16 && y>-16 && y<16) {
		mouseDir = -1;
		mouseDX = 0;
		mouseDY = 0;
		return;
	}

	switch(a) {
		case  0: mouseDX=1; mouseDY=0; break;
		case  1: mouseDX=1; mouseDY=1; break;
		case  2: mouseDX=0; mouseDY=1; break;
		case  3: mouseDX=-1; mouseDY=1; break;
		case  4: mouseDX=-1; mouseDY=0; break;
		case -4: mouseDX=-1; mouseDY=0; break;
		case -3: mouseDX=-1; mouseDY=-1; break;
		case -2: mouseDX=0; mouseDY=-1; break;
		case -1: mouseDX=1; mouseDY=-1; break;
	}
}

function mapClicked(event) {
	var x = event.x - grid.offsetLeft - grid.clientWidth/2;
	var y = event.y - grid.offsetTop - grid.clientHeight/2;
	var m = document.getElementById("mouse");
	var a = Math.round(Math.atan2(y, x) * 4 / Math.PI);

	switch(a) {
		case  0: move(1,0);		break;
		case  1: move(1,1);		break;
		case  2: move(0,1);		break;
		case  3: move(-1,1);	break;
		case  4: move(-1,0); 	break;
		case -4: move(-1,0);	break;
		case -3: move(-1,-1);	break;
		case -2: move(0,-1);	break;
		case -1: move(1,-1);	break;
	}
}

//-------------------------------------------------------------
// AI functions
//-------------------------------------------------------------

function moveAI() {
	var folk = map.folk;
	if(folk==null) return;

	var i; for(i=0; i<folk.length; i++) {
		var ai = folk[i];
		switch(ai.behaviour) {
		case "Static":
			break;

		case "Wander":
			var dx = Math.floor(Math.random()*3-1);
			var dy = Math.floor(Math.random()*3-1);
			if(canMove(ai.x+dx, ai.y+dy)) {
				ai.x += dx;
				ai.y += dy;
			}
			break;

		case "Follow":
			var dx = sign(viewX-ai.x);
			var dy = sign(viewY-ai.y);
			if(canMove(ai.x+dx, ai.y+dy)) {
				ai.x += dx;
				ai.y += dy;
			}
			else {
				var mx = Math.abs(viewX-ai.x);
				var my = Math.abs(viewY-ai.y);
				if(mx >= my && canMove(ai.x+dx, ai.y)) ai.x += dx;
				else if(canMove(ai.x, ai.y+dy)) ai.y += dy;
				else if(canMove(ai.x+dx, ai.y)) ai.x += dx;
			}
			break;

		case "Attack":			
			var dx = sign(viewX-ai.x);
			var dy = sign(viewY-ai.y);
			if(canMove(ai.x+dx, ai.y+dy)) {
				ai.x += dx;
				ai.y += dy;
			}
			break;
		}
	}
}

function canMove(x, y) {
	var t = getMap(x,y);
	var p = canPass(t);
	return Math.random() < p;
}

//-------------------------------------------------------------
// tile functions
//-------------------------------------------------------------

function getVis(c) {
	switch(c) {
		case 6:	// trees
		case 8:	// mountains
		case 57:	// stones
		case 73:	// secret brick
		case 127:	// bricks
			return 1;

		default:
			return 0;
	}
}

// Probability that player can move through this tile
function canPass(c) {
	switch(c) {
		case 3:
			return 0.5;

		case 4:
		case 9:
		case 10:
		case 11:
		case 12:
		case 14:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 65:
		case 66:
		case 67:
			return 1.0;

		case 5:
			return 0.8;

		case 6:
			return 0.6;

		case 7:
			return 0.4;

		default:
			return 0.0;
	}
}

//-------------------------------------------------------------
// map functions
//-------------------------------------------------------------

function saneX(x) { return !map.wrap && (x<0 || x>=map.width) ? -1 : (x+map.width)%map.width; }
function saneY(y) { return !map.wrap && (y<0 || y>=map.width) ? -1 : (y+map.height)%map.height; }

function getMap(x, y) {
	if(!map.wrap && (x<0 || x>=map.width || y<0 || y>=map.height)) {
		return map.wrapTile;
	}

	x = (x+map.width)%map.width;
	y = (y+map.height)%map.height;
	var t = map.data.substr(y*map.width*2+x*2,2);
	return parseInt(t, 16);
}

function getAI(x, y) {
	var folk = map.folk;
	if(folk==null) return;
	var i; for(i=0; i<folk.length; i++) {
		var person = folk[i];
		if(person.x==x && person.y==y) return person;
	}
	return null;
}

function getTile(c) {
	var x = c & 15;
	var y = c >> 4;
	return ""+(-x*32-3)+"px "+(-y*32-4)+"px";
}

function sign(x) { return x<0 ? -1 : x>0 ? 1 : 0; }

// update vis map for a single line (top,right,bottom,right)
function doVis(n, x, y, dx, dy, vis) {
	var i;
	var c;
	var v;
	var offset = viewWidth >> 1;
	for(i=0; i<n; i++) {
		c = getVis(getMap(viewX + x, viewY + y));
		v = vis[(y-sign(y)+offset)*viewWidth + (x-sign(x)+offset)];
		vis[(y+offset)*viewWidth + (x+offset)] = v==0 ? c : v+1;
		x += dx;
		y += dy;
	}
}

// return a map (viewWidth x viewHeight) of visible tiles as an array of int - 0 and 1 are visibile, values >1 are not
function makeVisMap() {
	var x = 0;
	var y = 0;

	var vis = [];
	for(y=0; y<viewHeight; y++) {
		for(x=0; x<viewWidth; x++) {
			vis.push(0);
		}
	}

	var size = 0;
	var max = viewWidth >> 1;
	for (size = 1; size <= max; size++)
	{
		doVis(size * 2, -size, -size,  1,  0, vis);
		doVis(size * 2,  size, -size,  0,  1, vis);
		doVis(size * 2,  size,  size, -1,  0, vis);
		doVis(size * 2, -size,  size,  0, -1, vis);
	}
	return vis;
}

function draw() {
	var vis = makeVisMap();

	var x = 0;
	var y = 0;
	var offsetY = -(viewHeight >> 1);
	for(y=0; y<viewHeight; y++) {
		var offsetX = -(viewWidth >> 1);
		for(x=0; x<viewWidth; x++) {
			var t = document.getElementById("g"+y+x);
			var ai = getAI(x, y);
			var c = 0;
			if(offsetX==0 && offsetY==0) c = 31; // party FIXME
			else if(vis[y*viewWidth+x] > party.vis) c = 126;	// can't see FIXME
			else {
				var ai = getAI(viewX+offsetX, viewY+offsetY);
				if(ai!=null) c = ai.tile;
				else c = getMap(viewX+offsetX, viewY+offsetY);
			}
			t.style.backgroundPosition = getTile(c);
			offsetX++;
		}
		offsetY++;
	}

	var coords = document.getElementById("coords");
	coords.innerText = ""+viewX+","+viewY+"";
}

var messages = [];
function feedback(msg) {
	messages[messages.length-1] += msg;
	feedbackUpdate();
}

function feedbackUpdate() {
	var control = document.getElementById("messages");
	var text = "";
	var i;
	for(i=0; i<messages.length; i++) {
		text += messages[i] + "<br>";
	}
	control.innerHTML = text;
}

function feedbackPrompt(p) {
	if(messages.length > 6) messages.shift();
	messages.push(p);
	feedbackUpdate();
}

function getMoveText(dx, dy) {
	var text = "";
	if(dy==-1) text += "North";
	else if(dy==1) text += "South";

	if(dx==-1) text += "West";
	else if(dx==1) text += "East";

	return text;
}

// move view by dx and dy
function move(dx, dy) {
	var x = viewX + dx;
	var y = viewY + dy;

	if(dx==0 && dy==0) {
		feedback("Pass");
		return;
	}

	if(!map.wrap && (x<0 || x>=map.width || y<0 || y>=map.height)) {
		// leaving
		feedback("Leaving...");
		leave();
		return;
	}

	var pass = canPass(getMap(x,y));
	var text = getMoveText(dx, dy);

	if(party.transport==0) {
		if(pass == 0.0) {
			text += " - Blocked";
			feedback(text);
			return;
		}

		if(pass != 1.0) {
			if(Math.random() > pass) {
				text += " - slow progress";
				feedback(text);
				return;
			}
		}
	}

	feedback(text);

	viewX = x;
	viewY = y;
	if(viewX < 0) viewX = map.width-1;
	if(viewX >= map.width) viewX = 0;
	if(viewY < 0) viewY = map.height-1;
	if(viewY >= map.height) viewY = 0;
	//draw();
}

// doesn't work in chrome, so using script map instead
function loadMap() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("demo").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "/world.txt", true);
	xhttp.send();
}
