#!/usr/bin/env node

// http://emberjs.com/blog/2015/02/05/compiling-templates-in-1-10-0.html

var fs = require('fs');
var compiler = require('./ember-template-compiler');
var input = fs.readFileSync(process.argv[2], { encoding: 'utf8' });
var template = compiler.precompile(input, false);
var output = "Ember.TEMPLATES['"+process.argv[3]+"'] = Ember.HTMLBars.template(" + template + ');';

fs.appendFileSync('./js/compiled-templates.js', output, { encoding: 'utf8' });

