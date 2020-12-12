const chai = require('chai')
const expect = chai.expect
const CanevasManager = require('../draw-canevas/canevas-manager.js')
const arrayTools =  require('../tools/arrayTools.js')


function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

function arrayEqualsBidimension(a, b) {
var test = a.length === b.length;
if(!test)
    return test;

for(var i = 0; i < a.length - 1; i ++) {
    test = test && arrayEquals(a[i], b[i]);
}

return test;
}

describe('a canevas', () => {
    var canevas

    beforeEach(() => {
        canevas = new CanevasManager('canevas-test')
    })

    it ('should initialize a x by y matrice', async () => {
        var expectedArray = [['-','-','-', '-'],['|',' ',' ','|'],['-','-','-','-']];
        canevas.initCanevas(3,3);
        var result = arrayEqualsBidimension(canevas.matrice, expectedArray);
        expect(true).to.equal(true);
    })
})
