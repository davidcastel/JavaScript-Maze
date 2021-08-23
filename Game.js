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

      const finishCoordinates = maze.finishCoordinates;
      let currentPosition = maze.currentCoordinates;

      maze.printMap();

      while (!this.#areCoordinatesTheSame(currentPosition, finishCoordinates)) {
        currentPosition = controls.moveSystem(currentPosition);
        maze.updateMatrix(currentPosition);
        currentPosition = maze.currentCoordinates;
        maze.printMap();
      }
    }

    #areCoordinatesTheSame(currentCoordinates, finishCoordinates) {
      return Object.keys(currentCoordinates).every(
        key => finishCoordinates.hasOwnProperty(key) && finishCoordinates[key] === currentCoordinates[key]
      );
    }
}
