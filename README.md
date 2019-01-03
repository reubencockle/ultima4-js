# ultima4-js
Ultima IV on Javascript/HTML

## Objectives
Create a simple Ultima IV like game using javascript and HTML that can be played on a single web page, which can be loaded locally.

## Screen Layout
```
+-----------+---------+
|           | Party   |
| Map View  |         |
|           +---------+
|           | Messages|
|           |         |
|           |         |
+-----------+---------+
```
* Map view is a table of 11 x 11 tiles of 32 x 32 pixels each
* Each tile set their background image to tileset image and dynamically offsets to display the current map tile
* The tileset is 16 x 16 icons of 32 x 32 pixels each => a tile can be represented by a single byte


## Directory layout
* index.html - HTML layout for the game, includes u4.js and maps/*.js
* u4.js - code
* maps/*.js - map files generated see below
* resources/ - directory containing ultima 4 resources, copied from a real version of the game - used to generated maps/*.js files
* data/ - directory on seed files for maps
* tools/ - directory containing tools (in C#) used to generate map files


## To Do
- [X] view referenced map with keyboard controls for North, West, East, South
- [X] tool to convert .ULT + .TLK files into map/.js files (u4tojs)
- [X] mouse controls for movement
- [X] visibility map to hide objects the player can't see
- [X] creative mode ignores blockers and shows all of the map
- [X] talk to towns folk
- [ ] cleanup layout
- [ ] folk animation
- [ ] shop keepers
- [ ] water animation (uses fancy bitmap manipulation inreal game)
- [ ] mosters
- [ ] combat
- [ ] dungeons
- [ ] party/characters
- [ ] gem view


## Design

### Map Properties
Property           | Description
-----------------: | :------------
_width_, _height_  | size of map
_x_, _y_           | starting x,y coordinates for map
_data_             | single string of width x height x 2 hex digits chars
_wrap_, _wrapTile_ | whether this maps wraps. If not (false) then fill offmap tiles in view with _wrapTile_
_locations_        |
_up_, _down_       | name of map to switch to when klimbing/descending
_folk_             | array of AI characters on this map - see Folk Properties


### Folk Properties
Property           | Description
-----------------: | :--------------------
_heShe_            | Personal pronoun
_description_      | displayed when conversation starts
_startX_, _startY_ | initial coordinates of AI on map
_x_, _y_           | current coordinates of AI on map
_tile_             | tile used to display AI
_prevTile_         | not used
_behaviour_        | Static, Wander, Follow, Attack
_responses_        | dictionary of responses to player questions { "_question_" : "_response_", ... }
_questions_        | dictionary of questions AI will ask player, triggered by player's question { "_trigger_" : { _text_ : "ai-question", _yes_ : "AI response to yes", _no_ : "AI response to no" } }

