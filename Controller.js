export default class Controller {
    constructor(x_position, y_position){
        this._xpos = x_position;
        this._ypos = y_position;
    }

    // Methods
    moveUp(x, y) {
        // Subtract 1 from y to move up
        return y - 1;
    }
}
