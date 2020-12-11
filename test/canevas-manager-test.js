const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const inquirer = require('inquirer')
const CanevasManager = require('../draw-canevas/canevas-manager.js')

describe('a canevas manager', () => {
    var canevas
    before(() => {
        canevas = new CanevasManager('canevas-test')
    })
    context('with no existing cred', () => {
        it ('should propt something', async () => {
            sinon.stub(inquirer, 'propmt').resolves({ test: 'foo' })
            let [test] = await canevas.getCanevas()
            expect(test).to.equal('foo')
            inquirer.prompt.restore()
        })
    })

    after(() => {
        canevas.conf.delete('apiTest')

    })
})
