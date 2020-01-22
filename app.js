const fse = require('fs-extra');
const id3 = require('node-id3')

const pathSource = "S:\\06.Muzyka\\bieganie\\"
const pathDestination = "M:\\"

console.log('------------ node-filename-random ------------')
fse.emptyDirSync(pathDestination);
var sourceFiles = fse.readdirSync(pathSource,{ withFileTypes: true })
sourceFiles.filter(file => !file.isDirectory()).forEach(file => {
    var new_name = Math.random().toString(36).substring(2) + ".mp3";
    fse.copySync(pathSource + file.name, pathDestination + new_name)
    id3.write({title: new_name}, pathDestination + new_name)
    console.log("Copy file: " + file.name)
})

console.log('Is done')