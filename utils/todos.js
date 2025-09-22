const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/rootDir')
const pathFile = path.join(rootDir,'data','sample.json')

exports.getIndex = (callback) => {
    fs.readFile(pathFile,'utf8',(err,content)=>{
        if (!err) return callback(JSON.parse(content))
        callback(null)
    })
}

exports.saveIndex = (data,callback) => {
    fs.writeFile(pathFile,JSON.stringify(data,null,2),err=>{
        if (!err) return callback(null)
        callback (err)
    })
}