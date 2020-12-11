const inquirer = require('inquirer')

class CanevasManager {
    constructor(name) {

    }
    
    initCanevas(width, length) {
        var myMatrix = new Array(length).fill(' ').map(() => new Array(width).fill(' '));
        for (var y = 0; y < length; y++) {
            myMatrix[y][0] = '|';
            myMatrix[y][width] = '|';
        }
        for (var x = 0; x <= width; x++) {
            myMatrix[0][x] = '-';
            myMatrix[width - 1][x] = '-';
        }
        for (var i = 0; i < myMatrix.length; i++) {
            console.log(myMatrix[i].join(' '));
        }
    }

    consumer() {
        inquirer.prompt([
            {
                type: "input",
                name: 'cmd',
                message: '>',
            }
        ]).then((answer) => {
            let args = answer.cmd.split(' ');
            switch (args[0]) {
                case 'C':
                    args.shift()
                    args= args.map(elem => parseInt(elem, 10))
                    this.initCanevas(args[0], args[0]);
                    break;
            }
        })
    }

}

module.exports = CanevasManager