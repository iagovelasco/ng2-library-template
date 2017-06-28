import resolve from 'rollup-plugin-node-resolve-angular';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import { config, packageJson } from './tools/config.js';
import * as sass from 'node-sass';

export default {
  entry: config.srcPath + '/index.ts',
  format: 'iife',
  sourceMap: true,
  moduleName: 'ng2LibraryTemplate', // packageJson.main,
  dest: `${config.distPath}/bundles/${packageJson.main}.iife.js`,
  external: [
    '@angular/core'
  ],
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  },
  plugins: [
    angular(
      {
        preprocessors: {
          template: template => template,
          style: scss => {
            let css;
            if (scss) {
              css = sass.renderSync({ data: scss }).css.toString();
            } else {
              css = '';
            }
            return css;
          },
        }
      }
    ),
    typescript({
      typescript: require('typescript')
    }),
    resolve({
      es2015: true,
      module: true,
      jsnext: true,
      main: true,
      extensions: ['.js', '.json'],
      preferBuiltins: false
    }),
    commonjs({
      include: 'node_modules/**',
    })
  ],
  onwarn: warning => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) != -1) return;
    console.error(warning);
  }
};
