 


> Open this page at [https://caffebd.github.io/pxt-enemy-movement/](https://caffebd.github.io/pxt-enemy-movement/)

## Usage

This extensions adds blocks in sprites to quickly implement an enemy patrol route. Give your enemy sprite an x or y velocity and then use the enemy patrol blocks to set a maximum distance to move before reversing direction.

Useful for platform games or RPG games where you don't simply want the enemy to bounce on the edge of the screen or off a wall.

The blocks are added to the bottom of the **sprites** toolbox.

* Setting Distance for X Axis

```blocks
let mySprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
mySprite.vx = 20
sprites.setPatrolPathX(mySprite, 50)
```

* Setting Distance for Y Axis

```blocks
let mySprite = sprites.create(sprites.builtin.forestBat0, SpriteKind.Player)
mySprite.vy = 20
sprites.setPatrolPathY(mySprite, 50)
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/caffebd/pxt-enemy-movement** and import

## Edit this project ![Build status badge](https://github.com/caffebd/pxt-enemy-movement/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/caffebd/pxt-enemy-movement** and click import


#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
