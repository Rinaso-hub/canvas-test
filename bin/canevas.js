#! /usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const CanevasService = require('../services/canevas-service.js')

const canevasService = new CanevasService()
canevasService.main()