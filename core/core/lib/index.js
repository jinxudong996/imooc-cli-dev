'use strict';

module.exports = core;
const pkg = require('../package.json')
let log = require('@imooc-cli/log');
let utils = require('@imooc-cli/utils');

function core() {
  checkPkyVersion()
  utils()
}

function checkPkyVersion(){
  log.info('cli',pkg.version)
}