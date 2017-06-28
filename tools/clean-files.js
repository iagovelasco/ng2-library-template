const del = require('del');
const config = require('./config-node.js');

del([`${config.module.distPath}/bundles/!(*.d.ts|*.umd.js|*.umd.js.map)`])
  .then(paths => {
    console.log('Files and folders that would be deleted:');
    console.log(paths.join('\n'));
  });
