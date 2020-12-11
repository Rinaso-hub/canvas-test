const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const inquirer = require('inquirer')
const CanvasManager = require('../lib/canvas-manager.js')

describe('a canvas manager', () => {
    var canvas
    before(() => {
        canvas = new CanvasManager('canvas-test')
    })
    context('with no existing cred', () => {
        it ('should propt something', async () => {
            sinon.stub(inquirer, 'propmt').resolves({ test: 'foo' })
            let [test] = await canvas.getCanvas()
            expect(test).to.equal('foo')
            inquirer.prompt.restore()
        })
    })

    after(() => {
        canvas.conf.delete('apiTest')

    })
})
