/* This is a class that will create a maze for the user.
 * */
export default class Maze {
  constructor(matrix) {
    this.__matrix = matrix;
    this.__maze = this.generateVisualMaze(matrix);
    this.__currentCoordinates = this.getCurrentPositionCoordinate(matrix);
    this.__finishCoordinates = this.#getFinishCoordinates(matrix);
  }

  // Getters
  get matrix() {
    return this.__matrix;
  }

  get maze() {
    return this.__maze;
  }

  get currentCoordinates() {
    return this.__currentCoordinates;
  }

  get finishCoordinates() {
    return this.__finishCoordinates;
  }

  // Setters
  set updateCurrentCoordinates(newCoordinates) {
    this.__currentCoordinates = newCoordinates;
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

  printMap() {
      console.log(this.maze);
  }

  getCurrentPositionCoordinate(matrix) {
    let x = 0;
    let y = 0;
    matrix.map((val, index) => {
      if (val.indexOf(2) !== -1) {
        x = val.indexOf(2);
        y = index;
      }
    });
    return {x, y};
  }

    #getFinishCoordinates(matrix) {
    let x = 0;
    let y = 0;
    matrix.map((val, index) => {
      if (val.indexOf(3) !== -1) {
        x = val.indexOf(3);
        y = index;
      }
    });
    return { x, y };
  }
}
