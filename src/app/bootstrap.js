require('../../jspm_packages/system.src.js')
require('../../jspm.config.js')

// This hack is required because socket.io-client accesses it without any guard
navigator = { 
    userAgent: "Electron Main Process" // TODO lookup some process info to put in here
}
System.import('./src/app/main').then(
    (m) => { m.initialize(__dirname, require('socket.io-client')('http://localhost:5776')) },
    (e) => { console.log(e) }
)
