#!/usr/bin/env phantomjs
var nodify = '../nodify/nodify.js';
phantom.injectJs(nodify);

var assert, should, feature, wait;

nodify.run(function() {
  require('./patches');
  var utils = require('./utils');
  var Engine = require('./engine').Engine;
  var program = require('commander');
  
  program.name = 'webspecter';
  program
    .version('0.1.0dev')
    .description('webspecter')
    .usage('[options] test_dir')
    .option('-f, --feature [title]', 'title of the feature to be tested', null)
    .option('-c, --console', 'forward JavaScript console to stderr')
    .parse(process.argv);

  program.path = utils.getPath(program.args[0]);
  
  var engine = new Engine(program);
  engine.run();
});

