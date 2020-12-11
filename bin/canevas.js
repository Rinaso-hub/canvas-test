#! /usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const CanevasManager = require('../draw-canevas/canevas-manager.js')


const canManager = new CanevasManager()
let test = canManager.consumer()