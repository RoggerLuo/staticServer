const co = require('co')
const fs = require('fs')
const HandleRes = require('./handle_res.js')
function writeFile(inputFile){
    return new Promise(resolve => {
        const tmp_path = inputFile.path;
        const path = process.cwd()
        const relativePath = `/`
        const dstPath = path+relativePath + inputFile.originalFilename     
        fs.rename(tmp_path, dstPath, function(err) {
             if (err) throw err;
             // 删除临时文件夹文件, 
             fs.unlink(tmp_path, function() {
                if (err) throw err;
             })
        })
        resolve('File uploaded to: ' + dstPath + ' - ' + inputFile.size + ' bytes')
    })
}

function upload(req, res) {
    console.log('********uploaduploadupload********')
    const client = HandleRes.getResFn(res);
    const inputFile = req.files.file //这个file是 <input>的名字
    if(inputFile==undefined) {
        client.fail('catch unknow error,undefined file')
    }
    co(function*() {
        const info = yield writeFile(inputFile)
        client.success(info)
    }).catch(client.fail);    
}

module.exports = upload

