/* This is a class that will create a maze for the user.
 * */
"use strict";
export default class Maze {
  #__matrix;
  #__maze;
  #__currentCoordinates;
  #__finishCoordinates;
  constructor(matrix) {
    this.#__matrix = matrix;
    this.#__maze = this.generateVisualMaze(matrix);
    this.#__currentCoordinates = this.getCurrentPositionCoordinate(matrix);
    this.__finishCoordinates = this.#getFinishCoordinates(matrix);
  }

  // Getters
  get matrix() {
    return this.#__matrix;
  }

  get maze() {
    return this.#__maze;
  }

  get currentCoordinates() {
    return this.#__currentCoordinates;
  }

  get finishCoordinates() {
    return this.__finishCoordinates;
  }

  // Setters
  /**
   * @param {{ x: number; y: number; }} newCoordinates
   */
  set updateCurrentCoordinates(newCoordinates) {
    this.#__currentCoordinates = newCoordinates;
  }

  /**
   * @param {any} newMatrix
   */
  set updateMaze(newMatrix) {
    this.#__maze = this.generateVisualMaze(newMatrix);
  }

  // Methods
  generateVisualMaze(matrix) {
    let maze = "";
    for (let i = 0; i < matrix.length; i++) {
      let rowString = "";
      let matrixRow = matrix[i];

      for (let j = 0; j < matrixRow.length; j++) {
        let element = matrixRow[j];

        switch(element) {
            case 3:
                rowString += "=";
                break;
            case 2:
                rowString += "X";
                break;
            case 1:
                rowString += "-";
                break;
            case 0:
                rowString += "*";
                break;
            default:
                break;
        }
      }

      maze += rowString += "\n";
    }
    return maze;
  }

  updateMatrix(coordinates) {
    let {x: newX, y: newY} = coordinates;

    // If the user tries to leave the barrier
    if ((newY < 0 || this.matrix.length === newY) || (newX < 0 || this.matrix[newY].length === newX)) {
      console.log('You can not leave the perimeter\n');
    }
    // If the user hits a wall
    else if (this.matrix[newY][newX] == 0) {
      console.log('You have hit a wall. Try a different way');
    }
    // If the user is on the correct path
    else {
      let {x: oldX, y: oldY} = this.currentCoordinates;
      this.updateCurrentCoordinates = coordinates;
      this.matrix[oldY][oldX] = 1;
      this.matrix[newY][newX] = 2;
      this.updateMaze = this.matrix;
    }
  }

  printMap() {
      console.log(this.maze);
  }

  getCurrentPositionCoordinate(matrix) {
    let x = 0;
    let y = 0;
    matrix.map((row, index) => {
      if (row.indexOf(2) !== -1) {
        x = row.indexOf(2);
        y = index;
      }
    });
    return {x, y};
  }

  #getFinishCoordinates(matrix) {
    let x = 0;
    let y = 0;
    matrix.map((row, index) => {
      if (row.indexOf(3) !== -1) {
        x = row.indexOf(3);
        y = index;
      }
    });
    return { x, y };
  }
}
