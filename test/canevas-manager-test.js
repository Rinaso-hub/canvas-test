const chai = require('chai')
const expect = chai.expect
const CanevasService = require('../services/canevas-service.js')
const arrayTool = require('../tools/arrayTool.js')


describe('a canevas', () => {
    var canevas = new CanevasService('canevas-test')
    /*beforeEach(() => {
        canevas = new CanevasService('canevas-test')
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
        expect(result).to.equal(true); // <==== WTF is this????
    })
    it('should draw a horizontal line from x1 y1 to x2 y2', async () => {
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
        canevas.drawLine(lineCoor);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(result).to.equal(true);// <==== WTF is this????
        //console.log(canevas)
    })
    it('should draw a horizontal line from x1 y1 to x2 y2', async () => {
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
        canevas.drawLine(lineCoor);
        var result = arrayTool.arrayEqualsBidimension(canevas.board, expectedArray);
        expect(result).to.equal(true);// <==== WTF is this????
    })

    //POURQUOI IL N Y PAS LES TESTS FAITS EN PREMIER????????? TU PIGES PAS TDD?
})