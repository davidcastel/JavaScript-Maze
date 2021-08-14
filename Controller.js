export default class Controller {
    constructor(x_position, y_position){
        this._xpos = x_position;
        this._ypos = y_position;
    }

    // Methods
    moveUp(y) {
        // Subtract 1 from y to move up
        return y - 1;
    }

    moveDown(y) {
        // Add 1 to y to move down
        // return y + 1;
    }

    moveRight(x) {
        // Add 1 to x to move right 
        return x + 1;
    }
}
