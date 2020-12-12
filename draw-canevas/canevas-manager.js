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
                            this.initCanevas(args[0], args[1]);
                            break;
                        case 'L':
                            args.shift()
                            this.drowLine(args);
                            for (var i = 0; i < this.board.length; i++) {
                                console.log(this.board[i].join(' '));
                            }
                            break;
                        case 'R':
                            args.shift()
                            this.drowRectangle(args);
                            for (var i = 0; i < this.board.length; i++) {
                                console.log(this.board[i].join(' '));
                            }
                            break;
                        case 'B':
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
            console.log(this.board[i].join(' '));
        }
    }

    drowLine(coordinates) {
        var coor = this.getCoordinates(coordinates);
        if ((coor[0].x == coor[1].x)) {
            for (var j = coor[0].y; j <= coor[1].y; j++) {
                this.board[coor[0].x][j] = 'x';
            }
        }
        if ((coor[0].y == coor[1].y)) {
            for (var i = coor[0].x; i <= coor[1].x; i++) {
                this.board[i][coor[0].y] = 'x';
            }
        }
    }

    drowRectangle(coo) {
        this.drowLine([coo[0], coo[1], coo[2], coo[1]])
        this.drowLine([coo[0], coo[3], coo[2], coo[3]])
        this.drowLine([coo[0], coo[1], coo[0], coo[3]])
        this.drowLine([coo[2], coo[1], coo[2], coo[3]])
    }

    getCoordinates(answer) {
        var array2 = answer.splice(0, Math.ceil(answer.length / 2));
        var arr = new Array();
        arr.push({ x: array2[0], y: array2[1] });
        arr.push({ x: answer[0], y: answer[1] });
        return (arr)
    }
}

module.exports = CanevasManager