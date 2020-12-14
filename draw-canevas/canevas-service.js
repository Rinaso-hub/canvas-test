const inquirer = require("inquirer");

class CanevasService {
  constructor() {
    this.directionsPrompt = {
      type: "input",
      name: "cmd",
      message: ">",
    };
  }

  main() {
    console.log("You can start drawing.");
    this.startCommandLine();
  }

  startCommandLine() {
    const program = () => {
      inquirer.prompt(this.directionsPrompt).then((answer) => {
        let args = answer.cmd.split(" ");
        if (args[0] != "Q") {
          switch (args[0]) {
            case "C":
              args.shift();
              args = args.map((elem) => parseInt(elem));
              this.xBorad = args[0];
              this.yBoard = args[1];
              this.initCanevas(this.xBorad, this.yBoard);
              break;
            case "L":
              args.shift();
              this.drawLine(args);
              this.displayMatrice();
              break;
            case "R":
              args.shift();
              this.drawRectangle(args[0], args[1], args[2], args[3]);
              this.displayMatrice();
              break;
            case "B":
              args.shift();
              this.spreadZoneChar(
                parseInt(args[0]),
                parseInt(args[1]),
                args[2]
              );
              this.displayMatrice();
              break;
          }
          program();
        } else {
          console.log("End of drawing");
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
    if (coor[0].x == coor[1].x) {
      for (var j = coor[0].y; j <= coor[1].y; j++) {
        if (
          !Object.is(this.board[coor[0].x][j], "-") &&
          !Object.is(this.board[coor[0].x][j], "|")
        ) {
          this.board[coor[0].x][j] = "x";
        }
      }
    }
    if (coor[0].y == coor[1].y) {
      for (var i = coor[0].x; i <= coor[1].x; i++) {
        if (
          !Object.is(this.board[i][coor[0].y], "-") &&
          !Object.is(this.board[i][coor[0].y], "|")
        ) {
          this.board[i][coor[0].y] = "x";
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
    var arraySplice = coordinates.splice(0, Math.ceil(coordinates.length / 2));
    var array = new Array();
    arr.push({ x: arraySplice[0], y: arraySplice[1] });
    arr.push({ x: coordinates[0], y: coordinates[1] });
    return array2;
  }

  spreadZoneChar(x, y, char) {
    //Si bordure de rectangle retour
    if (this.board[x][y] === "x") {
      return;
    }

    //Si bordure de matrice retour
    if (this.board[x][y] === "-" || this.board[x][y] === "|") {
      return;
    }

    //On rempli la case
    this.board[x][y] = char;

    // La fonction s auto check au debut et verifie qu elle est ni sur une bordure ni sur un rectangle,
    //donc tout ce qu il reste a faire c 'est l appeler sur les 4 cases autour
    this.spreadZoneChar(this.board[x + 1][y]);
    this.spreadZoneChar(this.board[x - 1][y]);
    this.spreadZoneChar(this.board[x][y + 1]);
    this.spreadZoneChar(this.board[x][y - 1]);
  }
}

module.exports = CanevasService;
