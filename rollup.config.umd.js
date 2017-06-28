import rollup from './rollup.config.js';
import { config, packageJson } from './tools/config.js';

rollup.format = 'umd';
rollup.dest = `${config.distPath}/bundles/${packageJson.name}.umd.js`;

export default rollup;
