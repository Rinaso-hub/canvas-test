const chai = require('chai')
const expect = chai.expect
const CanevasService = require('../services/canevas-service.js')
const arrayTool = require('../tools/arrayTool.js')


describe('a canevas', () => {
    var canevas = new CanevasService('canevas-test')

    it('should initialize a x by y', async () => {
        var expectedArray =
        [
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-'
            ]
          ];
        canevas.initCanevas(20, 4);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(result).to.equal(true);
    })
    it('should draw a horizontal line from x1 y1 to x2 y2', async () => {
        var expectedArray =[
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-'],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', 'x', 'x', 'x', 'x','x', 'x', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-'
            ]
          ]
        var lineCoor = ['1', '2', '6', '2']
        canevas.drawLine(lineCoor);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(result).to.equal(true);
    })
    it('should draw a vertical line from x1 y1 to x2 y2', async () => {
        var expectedArray =
        [
            [  '-', '-', '-', '-', '-',  '-', '-', '-', '-', '-',  '-', '-', '-', '-', '-',  '-', '-', '-', '-', '-',  '-', '-'],
            [  '|', ' ', ' ', ' ', ' ',  ' ', ' ', ' ', ' ', ' ',  ' ', ' ', ' ', ' ', ' ',  ' ', ' ', ' ', ' ', ' ',  ' ', '|'],
            ['|', 'x', 'x', 'x', 'x','x', 'x', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', 'x', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['|', ' ', ' ', ' ', ' ',' ', 'x', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'
            ],
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-'
            ]
          ]
        var lineCoor = ['6', '3', '6', '4']
        canevas.drawLine(lineCoor);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(result).to.equal(true);
    })
    it('should draw a rectangle upper left corner is (x1,y1) to lower right corner is (x2,y2)', async () => {
        var expectedArray =
        [
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-'],
            ['|', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', 'x','x', 'x', 'x', 'x', ' ',' ', '|'],
            ['|', 'x', 'x', 'x', 'x','x', 'x', ' ', ' ', ' ',' ', ' ', ' ', ' ', 'x',' ', ' ', ' ', 'x', ' ',' ', '|'],
            ['|', ' ', ' ', ' ', ' ',' ', 'x', ' ', ' ', ' ',' ', ' ', ' ', ' ', 'x','x', 'x', 'x', 'x', ' ',' ', '|'],
            ['|', ' ', ' ', ' ', ' ',' ', 'x', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', '|'],
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-']
          ]
        canevas.drawRectangle(14, 1, 18, 3);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(result).to.equal(true);
    })
    it('should fill connected area', async () => {
        var expectedArray =
        [
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-'],
            ['|', 'o', 'o', 'o', 'o','o', 'o', 'o', 'o', 'o','o', 'o', 'o', 'o', 'x','x', 'x', 'x', 'x', 'o','o', '|'],
            ['|', 'x', 'x', 'x', 'x','x', 'x', 'o', 'o', 'o','o', 'o', 'o', 'o', 'x',' ', ' ', ' ', 'x', 'o','o', '|'],
            ['|', ' ', ' ', ' ', ' ',' ', 'x', 'o', 'o', 'o','o', 'o', 'o', 'o', 'x','x', 'x', 'x', 'x', 'o','o', '|'],
            ['|', ' ', ' ', ' ', ' ',' ', 'x', 'o', 'o', 'o','o', 'o', 'o', 'o', 'o','o', 'o', 'o', 'o', 'o','o', '|'],
            ['-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-', '-', '-', '-','-', '-']
          ]
        canevas.spreadZoneChar(10,3,'o');
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(result).to.equal(true);
    })
})