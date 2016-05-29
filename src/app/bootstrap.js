const DIRNAME=__dirname;

require('../../jspm_packages/system.js');
require('../../jspm.config.js');
System.import('./src/app/main').then(
    function(m) { m.initialize(__dirname); },
    function(e) { console.log(e); }
);
