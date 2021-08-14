import Maze from "./Maze.js";
import Controller from "./Controller.js";
import readline from 'readline';

export default class Game {
    constructor() {}

    // Methods
    start() {
      const inputMatrix = [[1,1,3], [1,1,0], [2,1,0]];
      const maze = new Maze(inputMatrix);
      const controls = new Controller();

      const ASK_USER_TO_PLAY = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });

      ASK_USER_TO_PLAY.question('Do you want to play the maze game?', answer => {
          console.log('awesome');
          ASK_USER_TO_PLAY.close();
      });
    }
}
