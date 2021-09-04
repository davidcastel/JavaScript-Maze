export default class Controller {
    constructor(x_position, y_position){
        this._xpos = x_position;
        this._ypos = y_position;
    }

    // Methods
    moveSystem(coordinates, direction) {
        let {x, y} = coordinates;
        ({ x, y } = this.#directionSwitch(direction, x, y));
        return {x, y}; 
    }
    // Subtract 1 from y to move up
    moveUp = (y) => y - 1; 

    // Add 1 to y to move down
    moveDown = (y) => y + 1; 

    // Add 1 to x to move right 
    moveRight = (x) => x + 1;

    // Subtract 1 from x to move left
    moveLeft = (x) => x - 1;

    #directionSwitch(direction, x, y) {
        switch (direction) {
            case "a":
                x = this.moveLeft(x);
                break;
            case "w":
                y = this.moveUp(y);
                break;
            case "s":
                y = this.moveDown(y);
                break;
            case "d":
                x = this.moveRight(x);
                break;
            default:
                break;
        }
        return { x, y };
    }
}
