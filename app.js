#!/usr/bin/env node

'use strict';
const logging= require('./logging.js');
const math= require('./math.js');
const volume= require('./volume.js');
const triangle=require('./triangle.js');


var r;

global.deg= function() {
    deg= true;
    r.setPrompt('deg>');
};
global.rad= function() {
    deg= false;
    r.setPrompt('rad>');
};

r= require('repl').start({prompt: 'deg>' })
