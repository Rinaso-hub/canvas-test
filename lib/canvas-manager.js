const inquirer = require('inquirer')

class CanvasManager {
    constructor(name) {
    }
    consumer() {

        function drawCanvas(wordArray) {
            var array = wordArray.map(elem => parseInt(elem, 10))
            var myMatrix = new Array(array[1]).fill(' ').map(() => new Array(array[0]).fill(' '));
            for (var y = 0; y < array[1]; y++) {
                myMatrix[y][0] = '|';
                myMatrix[y][array[0]] = '|';
            }
            for (var x = 0; x <= array[0]; x++) {
                myMatrix[0][x] = '-';
                myMatrix[array[0] - 1][x] = '-';
            }
            for (var i = 0; i < myMatrix.length; i++) {
                console.log(myMatrix[i].join(' '));
            }
        }

        var coordinatesLine = [
            { x: 0, y: 0 },
            { x: 1, y: 0 }
        ];


        /*function drowLine(points) {
            console.log('Step Three');

            for (var j = 0; j < points.length; j++) {
                myMatrix[points[j].y][points[j].x] = '-';

                for (var k = 0; k < points.length; k++) {
                    myMatrix[points[j].y][points[k].x] = 'x';
                }
            }

            for (var i = 0; i < myMatrix.length; i++) {
                console.log(myMatrix[i].join(' '));
            }
        }

        var pointsArray = [
            { x: 5, y: 0 },
            { x: 4, y: 0 },
            { x: 3, y: 0 },
            { x: 1, y: 0 },
            { x: 3, y: 4 },
            { x: 6, y: 6 },
            { x: 4, y: 8 },
            { x: 7, y: 9 },
        ];*/


        inquirer.prompt([
            {
                type: "input",
                name: 'cmd',
                message: '>',
            }
        ]).then((answer) => {
            let wordArray = answer.cmd.split(' ');
            console.log(wordArray);
            switch (wordArray[0]) {
                case 'C':
                    wordArray.shift()
                    drawCanvas(wordArray)
                    break;
            }
        })
    }

}

module.exports = CanvasManager