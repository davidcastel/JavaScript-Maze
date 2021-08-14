/* This is a class that will create a maze for the user.
 * */
export default class Maze {
  constructor(matrix) {
    this.__matrix = matrix;
    this.__maze = this.generateVisualMaze(matrix);
    this.__startX = 0;
    this.__startY = 0;
    this.__endX = 0;
    this.__endY = 0;
  }

  // Getters
  get matrix() {
    return this.__matrix;
  }

  get maze() {
    return this.__maze;
  }

  get get_current_X() {
    return this.getCurrentPositionX(this.__matrix);
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

  getCurrentPositionX(matrix) {
    let x = 0;
    matrix.map(val => {
      if (val.indexOf(2) !== -1) {
        x = val.indexOf(2);
      }
    });
    return x;
  }
}
