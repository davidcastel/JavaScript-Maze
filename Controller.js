import promptSync from 'prompt-sync';

export default class Controller {
    constructor(x_position, y_position){
        this._xpos = x_position;
        this._ypos = y_position;
    }

    // Methods
    moveSystem(coordinates) {
        let {x, y} = coordinates;

        const prompt = promptSync({sigint: true});
        console.log("Please type an input to move\n( A || W || S || D )\n");
        let direction = prompt();
        direction.replace(/\s/g, "").toLowerCase();
        switch(direction) {
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
        return {x, y}; 
    }
    moveUp(y) {
        // Subtract 1 from y to move up
        return y - 1;
    }

    moveDown(y) {
        // Add 1 to y to move down
        return y + 1;
    }

    moveRight(x) {
        // Add 1 to x to move right 
        return x + 1;
    }

    moveLeft(x) {
        // Subtract 1 from x to move left
        return x - 1;
    }
}
