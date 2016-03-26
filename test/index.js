/* global describe, it */
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect

describe('E2E test Harry Potter Book', function () {
  it('amount7', function * () {
    this.timeout(15000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.btn0')
      .click('.btn1')
      .click('.btn2')
      .click('.btn3')
      .click('.btn4')
      .click('.btn5')
      .click('.btn6')
      .evaluate(function () {
        return document.querySelector('.amount').innerHTML
      })
    expect(value).to.equal('7')
  })
  it('discount20', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.btn0')
      .click('.btn0')
      .click('.btn1')

      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('20.00')
  })
  it('discount60', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn1')
      .click('.btn1')
      .click('.btn1')

      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('60.00')
  })
  it('discount0', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')

      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('0.00')
  })
  it('discount80', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn1')
      .click('.btn1')
      .click('.btn2')

      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('80.00')
  })
  it('sumprice700(no discount)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')
      .click('.btn0')

      .evaluate(function () {
        return document.querySelector('.calsumprice').innerHTML
      })
    expect(value).to.equal('700.00')
  })
  it('sumprice700(calc discount)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.btn0')
      .click('.btn1')
      .click('.btn2')
      .click('.btn3')
      .click('.btn4')
      .click('.btn5')
      .click('.btn6')

      .evaluate(function () {
        return document.querySelector('.showsumprice').innerHTML
      })
    expect(value).to.equal('280.00')
  })
})
