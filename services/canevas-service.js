const inquirer = require("inquirer");

class CanevasService {
  constructor() {
    this.commandPrompt = {
      type: "input",
      name: "cmd",
      message: ">",
    };
  }

  main() {
    console.log("Please press C w h to create a new canvas (width w and height h).");
    this.startCommandLine();
  }

  startCommandLine() {
    const program = () => {
      inquirer.prompt(this.commandPrompt).then((answer) => {
        let args = answer.cmd.split(" ");
        if (args[0] != "Q") {
          switch (args[0]) {
            case "C":
              if (args.length == 3) {
                args.shift();
                args = args.map((elem) => parseInt(elem));
                this.initCanevas(args[0], args[1]);
              }
              break;
            case "L":
              args.shift();
              for (var i = 0; i <= args.length; i++) {
                if (typeof args.map((i) => parseInt(i)) != 'number' || args.length != 4) {
                  break;
                }
              }
              this.drawLine(args);
              this.displayMatrice();
              break;
            case "R":
              args.shift();
              for (var i = 0; i <= args.length; i++) {
                if (typeof args.map((i) => parseInt(i)) != 'number' || args.length != 4) {
                  break;
                }
              }
              this.drawRectangle(args[0], args[1], args[2], args[3]);
              this.displayMatrice();
              break;
            case "B":
              args.shift();
              if (args.length == 3) {
                this.spreadZoneChar(
                  parseInt(args[0]),
                  parseInt(args[1]),
                  args[2]
                );
                this.displayMatrice();
              }
              break;
          }
          program();
        } else {
          console.log("You quit the program");
        }
      });
    };
    program();
  }

  displayMatrice() {
    for (var i = 0; i < this.board.length; i++) {
      console.log(this.board[i].join(""));
    }
  }

  initCanevas(width, length) {
    length = length + 2;
    width = width + 2;
    this.board = new Array(length)
      .fill(" ")
      .map(() => new Array(width).fill(" "));
    for (var y = 0; y < length; y++) {
      this.board[y][0] = "|";
      this.board[y][width - 1] = "|";
    }
    for (var x = 0; x < width; x++) {
      this.board[0][x] = "-";
      this.board[length - 1][x] = "-";
    }
    for (var i = 0; i < this.board.length; i++) {
      console.log(this.board[i].join(""));
    }
  }

  drawLine(coordinates) {
    var coor = this.getCoordinates(coordinates);
    if (coor[0].x === coor[1].x) {
      for (var j = coor[0].y; j <= coor[1].y; j++) {
        if (
          !Object.is(this.board[j][coor[0].x], "-") &&
          !Object.is(this.board[j][coor[0].x], "|")
        ) {
          this.board[j][coor[0].x] = "x";
        }
      }
    }
    if (coor[0].y === coor[1].y) {
      for (var i = coor[0].x; i <= coor[1].x; i++) {
        if (!Object.is(this.board[coor[0].y][i], "-") &&
          !Object.is(this.board[coor[0].y][i], "|")) {
          this.board[coor[0].y][i] = "x";
        }
      }
    }
  }

  drawRectangle(x1, y1, x2, y2) {
    this.drawLine([x1, y1, x2, y1]);
    this.drawLine([x1, y2, x2, y2]);
    this.drawLine([x1, y1, x1, y2]);
    this.drawLine([x2, y1, x2, y2]);

  }

  getCoordinates(coordinates) {
    if (coordinates.length == 4) {
      var array = [{ x: coordinates[0], y: coordinates[1] }]
      array.push({ x: coordinates[2], y: coordinates[3] })
      return array;
    } else
      return;
  }

  spreadZoneChar(x, y, char) {
    var newX = y
    var newY = x
    var charFill = this.board[newX][newY];
    var list = [{ x: newX, y: newY }], item;
    while (list.length) {
      item = list.shift();
      x = item.x;
      y = item.y;
      if (this.board[x][y] === charFill) {
        this.board[x][y] = char;
        if (x > 0) {
          list.push({ x: x - 1, y: y })
        }
        if (x + 1 < this.board.length) {
          list.push({ x: x + 1, y: y })
        }
        if (y > 0) {
          list.push({ x: x, y: y - 1 });
        }
        if (y + 1 < this.board[x].length) {
          list.push({ x: x, y: y + 1 });
        }
      }
    }
  }
}

module.exports = CanevasService;