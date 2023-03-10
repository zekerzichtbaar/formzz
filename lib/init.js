#!/usr/bin/env node
const fs = require('fs');
const fse = require('fs-extra');
const packageName = '@zekerzichtbaar/formzz';

const init = () => {
    try {
        fse.copySync(`${process.env.INIT_CWD}/node_modules/${packageName}/components/input-fields`, `${process.env.INIT_CWD}/src/components/input-fields`);
        console.log('✅ Installed input-fields components');
    } catch (error) {
        console.log(error)
    }
    console.log('✅ Initialisation done!');
    
    return;
};

module.exports = { init };
require('make-runnable/custom')({
    printOutput: false
})