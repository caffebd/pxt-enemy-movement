// Add your code here
namespace sprites {
    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=setPatrolPathX block="set $sprite=variables_get distance on x $value"
    //% group="Enemy Movement"
    //% weight=10
    //% blockGap=8
    export function setPatrolPathX(sprite: Sprite, value: number) {

        if (!sprite) return;
        let startX = sprite.x
        let targetX = startX + value
        function checkXPos() {
            if (sprite.x >= targetX || sprite.x < startX) {
                let xVel = sprite.vx * -1
                sprite.setVelocity(xVel, sprite.vy)
            }
        }

        forever(checkXPos)

    }


    //% blockId=setPatrolPathY block="set $sprite=variables_get distance on y $value"
    //% group="Enemy Movement"
    //% weight=10
    //% blockGap=8
    export function setPatrolPathY(sprite: Sprite, value: number) {

        if (!sprite) return;
        let startY = sprite.y
        let targetY = startY + value
        function checkYPos() {
            if (sprite.y >= targetY || sprite.y < startY) {
                let yVel = sprite.vy * -1
                sprite.setVelocity(sprite.vx, yVel)
            }
        }

        forever(checkYPos)

    }



}
