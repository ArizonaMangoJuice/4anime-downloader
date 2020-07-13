#!/usr/bin/env node
process.env.UV_THREADPOOL_SIZE = 128;
const fdownload = require('file-downloadr')

let apis = {
    '1.4': 'https://storage.googleapis.com/justawesome-183319.appspot.com/',
    '2.4': 'https://storage.googleapis.com/linear-theater-254209.appspot.com/',
    '6.4': 'https://storage.googleapis.com/linear-theater-254209.appspot.com/',
    '7.4': 'https://storage.googleapis.com/justawesome-183319.appspot.com/'
}

async function fourAD(name, episodes, apiVer){
    let api = apis[apiVer]
    
    if(episodes === 0) return

    let numEp = episodes.toString()

    if(numEp.length < 2) numEp = '0' + numEp

    await fdownload(api + "v" + apiVer + "animu.me/"+ name + "/" + name + "-Episode-"+ numEp +"-1080p.mp4",
    "./dist/" + name +"-Episode-" + numEp + "-1080p.mp4")
    
    console.log(name +"-Episode-" + numEp + "-1080p.mp4" +' is done downloading')

    return fourAD(name, episodes - 1, apiVer)
}
