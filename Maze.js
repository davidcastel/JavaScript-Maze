/* This is a class that will create a maze for the user.
 * */
export default class Maze {
  constructor(matrix) {
    this.__matrix = matrix;
    this.__maze = this.generateVisualMaze(matrix);
  }

  // Getters
  get matrix() {
    return this.__matrix;
  }

  get maze() {
    return this.__maze;
  }

  // Methods
  generateVisualMaze(matrix) {
    let maze = "";
    for (let i = 0; i < matrix.length; i++) {
      let rowString = "";
      let matrixRow = matrix[i];

      for (let j = 0; j < matrixRow.length; j++) {
        let element = matrixRow[j];

        if (start[0] === i && start[1] ===j) {
            rowString += "X";
            continue;
        } else if (end[0] === i && end[1] === j) {
            rowString += "=";
            continue;
        } else if (element === 1) {
            rowString += "-";
        } else if (element === 0) {
            rowString += "*";
        }
      }

      maze += rowString += "\n";
    }
    return maze;
  }
}
