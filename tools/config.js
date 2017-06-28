const fs = require('fs');

export const config = JSON
  .parse(fs.readFileSync('./module.config.json').toString());

export const packageJson = JSON
  .parse(fs.readFileSync('./package.json').toString());
