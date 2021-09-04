import Maze from "./Maze.js";
import Controller from "./Controller.js";
import promptSync from 'prompt-sync';

export default class Game {
    constructor() {}

    // Methods
    start() {
      const prompt = promptSync({sigint: true});
      let answer = prompt('Do you want to play the maze game?');
      answer.replace(/\s/g, "").toLowerCase();
      if(answer === "yes") {
          console.log('The game has started');
          this.play();
      } else {
        console.log('didnt work');
      }
    }

    play() {
      const inputMatrix = [[1,1,3], [1,1,0], [2,1,0]];
      const maze = new Maze(inputMatrix);
      const controls = new Controller();
      const prompt = promptSync({sigint: true});

      const finishCoordinates = maze.finishCoordinates;
      let currentPosition = maze.currentCoordinates;

      maze.printMap();

      while (!this.#areCoordinatesTheSame(currentPosition, finishCoordinates)) {
        console.log("Please type an input to move\n( A || W || S || D )\n\nWould you like to see an updated map? Type: \n(map)\nWould you like to Exit? Type : \n(exit)");
        let answer = prompt();
        answer.replace(/\s/g, "").toLowerCase();
        switch(answer) {
          case "a":
          case "w":
          case "s":
          case "d":
            currentPosition = controls.moveSystem(currentPosition, answer);
            maze.updateMatrix(currentPosition);
            currentPosition = maze.currentCoordinates;
            maze.printMap();
            break;
          case "maze":
            maze.printMap();
            break;
          case "exit":
            process.exit();
          default:
            break;
        }
      }

      console.log('!'.repeat(25) + '\n!' + ' '.repeat(23) + '!');
      console.log('Congradulations! You Won!');
      console.log('!' + ' '.repeat(23) + '!\n' + '!'.repeat(25));
    }

    #areCoordinatesTheSame(currentCoordinates, finishCoordinates) {
      return Object.keys(currentCoordinates).every(
        key => finishCoordinates.hasOwnProperty(key) && finishCoordinates[key] === currentCoordinates[key]
      );
    }
}
