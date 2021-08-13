/* This is a class that will create a maze for the user.
 * */
export default class Maze {
  constructor(matrix, start, end) {
    this.__matrix = matrix;
    // start [x, y]
    this.__start_pos = start;
    // end format [x, y]
    this.__end_pos = end;
    this.__maze = this.generateVisualMaze(matrix, start, end);
  }

  // Getters
  get matrix() {
    return this.__matrix;
  }

  get maze() {
    return this.__maze;
  }

  // Methods
  generateVisualMaze(matrix, start, end) {
    let maze = "";
    for (let i = 0; i < matrix.length; i++) {
      let rowString = "";
      let matrixRow = matrix[i];

      for (let j = 0; j < matrixRow.length; j++) {
        let element = matrixRow[j];
        if (element === 1) {
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
