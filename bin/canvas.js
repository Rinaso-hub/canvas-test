#! /usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const CanvasManager = require('../lib/canvas-manager.js')


const canManager = new CanvasManager()
let test = canManager.consumer()