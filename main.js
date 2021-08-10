"use strict";
/* The purpose of this repo is to contain the project for a JS
 * powered terminal game that the user can play on the terminal.
 *
 * The goal is to one day be able to publish this game on a website
 * so that other can play this game on a website instead of pulling
 * up the game on the terminal.
 *
 * */

/* This is the map that will be following the
 * **********
 * *-*-*-*---
 * *-----*-**
 * *-**-**--*
 * *-*--*--**
 * *-*-*--***
 * **********
 *
 * Matrix:
 * [0,0,0,0,0,0,0,0,0,0]
 * [0,1,0,1,0,1,0,1,1,1]
 * [0,1,1,1,1,1,0,1,0,0]
 * [0,1,0,0,1,0,0,1,1,0]
 * [0,1,0,1,1,0,1,1,0,0]
 * [0,1,0,1,0,1,1,0,0,0]
 * [0,0,0,0,0,0,0,0,0,]
 * */

/* This project will begin to use the Object-Oriented concepts
 * and will try to use classes and develop quicker with a matrix
 * input by the user.
 * Using this approach, it should be quicker to develop,
 * however the largest pro is that this project will be scaleable
 * for larger matrix.
 *
 * The goal is to one day have the user input their own map
 * that the program will automatically make itself.
 *
 * TODO:
 * 1. Create a class for the maze
 * 2. Create a class for the controllers of the game
 * 3. Create a class for the game
 * 4. Organize the files in a base directory
 *
 *
 * Once I figure out the core concepts and functionailty of
 * the program, things that would be nice to add:
 * !---TODO:
 * 1. Figure out different ways for the user to add a map that they can play.
 * 2. Figure out standard output for things to do
 *
 * */

/* This is a class that will create a maze for the user.
 * */
class Maze {
  constructor(matrix, start, end) {
    this.__matrix = matrix;
    this.__start_pos = start;
    this.__end_pos = end;
    this.__maze = this.generateMaze(matrix);
  }

  // Getters
  get matrix() {
    return this.__matrix;
  }

  get maze() {
    return this.__maze;
  }

  // Methods
  generateMaze(matrix) {
    let maze = "";
    for (let i = 0; i < matrix.length; i++) {
      let rowString = "";
      let matrixRow = matrix[i];

      for (let j = 0; j < matrixRow.length; j++) {
        let element = matrixRow[j];
        if (element === "1") {
          rowString += "-";
        } else if (element === "0") {
          rowString += "*";
        }
      }

      maze += rowString;
    }
    return maze;
  }
}

const main = function () {
  const new_maze = new Maze(
    [
      [1, 1],
      [1, 1],
    ],
    [0, 0],
    [1, 1]
  );
  console.log(new_maze.maze);
  console.log(new_maze.matrix);
  console.log("hello world");
};

main();
