import Maze from "./Maze.js";
import Controller from "./Controller.js";
import readline from 'readline';

export default class Game {
    constructor() {}

    // Methods
    start() {
      const ASK_USER_TO_PLAY = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });

      ASK_USER_TO_PLAY.question('Do you want to play the maze game? \n', answer => {
          answer.replace(/\s/g, "").toLowerCase();
          if (answer === "yes") {
            console.log('The game has started');
            this.play();
          } 
          ASK_USER_TO_PLAY.close();
      });
    }

    play() {
      const inputMatrix = [[1,1,3], [1,1,0], [2,1,0]];
      const maze = new Maze(inputMatrix);
      const controls = new Controller();

      const finishCoordinates = maze.finishCoordinates;
      let { x:currentX, y:currentY } = maze.currentCoordinates;

      maze.printMap();
    }
}
