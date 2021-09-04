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
    // Subtract 1 from y to move up
    moveUp = (y) => y - 1; 

    // Add 1 to y to move down
    moveDown = (y) => y + 1; 

    // Add 1 to x to move right 
    moveRight = (x) => x + 1;

    // Subtract 1 from x to move left
    moveLeft = (x) => x - 1;
}
