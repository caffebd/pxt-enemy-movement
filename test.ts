// tests go here; this will not be compiled when this package is used as an extension.

let mySprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy)
mySprite.setPosition(20, 55)
mySprite.vx = 20
sprites.setPatrolPathX(mySprite, 50)

let mySprite2 = sprites.create(sprites.builtin.forestBat7, SpriteKind.Enemy)
mySprite2.setPosition(111, 55)
mySprite2.vy = 20
sprites.setPatrolPathY(mySprite2, 50)
