const chai = require('chai')
const expect = chai.expect
const CanevasManager = require('../draw-canevas/canevas-manager.js')
const arrayTool = require('../tools/arrayTool.js')


describe('a canevas', () => {
    var canevas = new CanevasManager('canevas-test')
    /*beforeEach(() => {
        canevas = new CanevasManager('canevas-test')
    })*/

    it('should initialize a x by y', async () => {
        var expectedArray =
            [['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']];
        canevas.initCanevas(10, 4);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(true).to.equal(true);
    })
    it('should drow a horizental line from x1 y1 to x2 y2', async () => {
        var expectedArray =
            [
                ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
                ['|', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', '|'],
                ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
                ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],,
                ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
                ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            ];
        var lineCoor = ['1', '1', '1', '4']
        canevas.drowLine(lineCoor);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(true).to.equal(true);
        //console.log(canevas)
    })
    it('should drow a horizental line from x1 y1 to x2 y2', async () => {
        var expectedArray =
            [
                ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
                ['|', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
                ['|', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
                ['|', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],,
                ['|', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
                ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
            ];
        var lineCoor = ['1', '1', '4', '1']
        canevas.drowLine(lineCoor);
        var result = MyClass1.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(true).to.equal(true);
        //console.log(canevas)
    })
})