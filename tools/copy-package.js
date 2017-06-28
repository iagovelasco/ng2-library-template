const fs = require('fs');
const config = require('./config-node.js');

const defaultPackageJson = `package.json`;
const packageJson = fs.readFileSync(defaultPackageJson).toString();

const distPackageJsonPath = `${config.module.distPath}/package.json`;

fs.writeFileSync(distPackageJsonPath, packageJson);
