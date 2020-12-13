const inquirer = require('inquirer')

class CanevasManager {

    constructor() {
        this.directionsPrompt = {
            type: 'input',
            name: 'cmd',
            message: '>'
        };
    }

    main() {
        console.log('You can start drowing.');
        this.startCommandLine();
    }

    startCommandLine() {
        const program = () => {
            inquirer.prompt(this.directionsPrompt).then((answer) => {
                let args = answer.cmd.split(' ');
                if (args[0] != 'Q') {
                    switch (args[0]) {
                        case 'C':
                            args.shift()
                            args = args.map(elem => parseInt(elem))
                            this.xBorad = args[0]
                            this.yBoard = args[1]
                            this.initCanevas(this.xBorad, this.yBoard);
                            break;
                        case 'L':
                            args.shift()
                            this.drowLine(args);
                            for (var i = 0; i < this.board.length; i++) {
                                console.log(this.board[i].join(''));
                            }
                            break;
                        case 'R':
                            args.shift()
                            this.drowRectangle(args[0], args[1], args[2], args[3]);
                            for (var i = 0; i < this.board.length; i++) {
                                console.log(this.board[i].join(''));
                            }
                            break;
                        case 'B':
                            args.shift()
                            this.recurse(parseInt(args[0]), parseInt(args[1]), args[2])
                            for (var i = 0; i < this.board.length; i++) {
                                console.log(this.board[i].join(''));
                            }
                            break;
                    }
                    program();
                }
                else {
                    console.log('End of drowing')
                }
            })
        }
        program()
    }

    initCanevas(width, length) {
        length = length + 2
        this.board = new Array(length).fill(' ').map(() => new Array(width).fill(' '));
        for (var y = 0; y < length; y++) {
            this.board[y][0] = '|';
            this.board[y][width - 1] = '|';
        }
        for (var x = 0; x < width; x++) {
            this.board[0][x] = '-';
            this.board[length - 1][x] = '-';
        }
        for (var i = 0; i < this.board.length; i++) {
            console.log(this.board[i].join(''));
        }
    }

    drowLine(coordinates) {
        var coor = this.getCoordinates(coordinates);
        if ((coor[0].x == coor[1].x)) {
            for (var j = coor[0].y; j <= coor[1].y; j++) {
                if (!Object.is(this.board[coor[0].x][j], '-') &&
                    !Object.is(this.board[coor[0].x][j], '|')) {
                    this.board[coor[0].x][j] = 'x';
                }
            }
        }
        if ((coor[0].y == coor[1].y)) {
            for (var i = coor[0].x; i <= coor[1].x; i++) {
                if (!Object.is(this.board[i][coor[0].y], '-') &&
                    !Object.is(this.board[i][coor[0].y], '|')) {
                    this.board[i][coor[0].y] = 'x';
                }
            }
        }
    }

    drowRectangle(x1, y1, x2, y2) {
        this.drowLine([x1, y1, x2, y1])
        this.drowLine([x1, y2, x2, y2])
        this.drowLine([x1, y1, x1, y2])
        this.drowLine([x2, y1, x2, y2])
    }

    getCoordinates(coordinates) {
        var arraySplice = coordinates.splice(0, Math.ceil(coordinates.length / 2));
        var array = new Array();
        arr.push({ x: arraySplice[0], y: arraySplice[1] });
        arr.push({ x: coordinates[0], y: coordinates[1] });
        return (array2)
    }

    recurse(x, y, color) {
        if (this.board[x][y] != 'x') {
            if (this.board[x][y] !== '-' && this.board[x][y] !== '|') {
                this.board[x + 1][y] = color
                this.board[x][y + 1] = color
                this.board[x - 1][y] = color
                this.board[x][y - 1] = color
            }
        }

        if (y <= this.xBorad - 3 && this.board[x][y] !== '-' && this.board[x][y] !== '|') {
            this.recurse(x, y + 1, color);
        }

        else if (x < this.yBoard - 2 && this.board[x][y] != '-' && this.board[x][y] != '|') {
            this.recurse(x + 1, y, color);
        }

        /*this.recurse(x - 1, y, color);
        this.recurse(x, y + 1, color);
        this.recurse(x, y - 1, color);*/
    }

}

module.exports = CanevasManager