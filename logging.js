'use strict';
const util= require('util');
const fs= require('fs');


//log console output to file
const consoleLogFile= 'consolelog.log';
const consoleLog= fs.createWriteStream(consoleLogFile, { 'flags': 'a' });
consoleLog.write('\n// ************* starting at: ' + new Date().toISOString() + '\n');

const stderrWriteSave= process.stderr.write;
process.stderr.write= function(data) {
    consoleLog.write(data.replace(/\033\[[0-9;].m?/g, '').replace('\r', '\n'));
    stderrWriteSave.apply(this, arguments);
};

const stdoutWriteSave= process.stdout.write;
process.stdout.write= function(data) {
    consoleLog.write(data.replace(/\033\[[0-9;].m?/g, '').replace('\r', '\n'));
    stdoutWriteSave.apply(this, arguments);
};


const getVarName= obj => Object.keys(obj)[0];

global.save= function(variable, filename) {
    if (filename) {
        if (!filename.endsWith('.json')) {
            filename += '.json';
        }
    }
    else {
        filename= getVarName(variable) + '.json';
    }
    fs.writeFileSync(filename, JSON.stringify(variable, null, 2));
};
