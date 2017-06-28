const fs = require('fs');
const config = require('./config-node.js');

const packageJsonPath = `${config.module.distPath}/package.json`;
const originalPackageJson = fs.readFileSync(packageJsonPath).toString();

const newPackageJson = JSON.parse(originalPackageJson);

delete newPackageJson.devDependencies;
delete newPackageJson.scripts;

fs.writeFileSync(packageJsonPath, JSON.stringify(newPackageJson, null, 2));
