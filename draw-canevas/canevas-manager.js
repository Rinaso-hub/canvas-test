const inquirer = require('inquirer')


class CanevasManager {

    constructor() {

    }
    
    initCanevas(width, length) {
        this.matrice = new Array(length).fill(' ').map(() => new Array(width).fill(' '));
        for (var y = 0; y < length; y++) {
            this.matrice[y][0] = '|';
            this.matrice[y][width] = '|';
        }
        for (var x = 0; x <= width; x++) {
            this.matrice[0][x] = '-';
            this.matrice[width - 1][x] = '-';
        }
        for (var i = 0; i <  this.matrice.length; i++) {
            console.log( this.matrice[i].join(' '));
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