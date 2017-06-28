const fs = require('fs');

module.exports = {
  module: JSON.parse(fs.readFileSync('./module.config.json').toString()),
  packageJson: JSON.parse(fs.readFileSync('./package.json').toString())
}
