import babel from 'rollup-plugin-babel'
import closure from '@ampproject/rollup-plugin-closure-compiler'
import pkg from './package.json'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

export default process.env.NODE_ENV == 'production'
    ? [
          {
              input: 'src/index.js',
              output: [{ file: pkg.module, format: 'es' }],
              plugins: [babel()]
          },
          {
              input: 'src/index.js',
              output: [
                  { name: 'smartColumns', file: pkg.browser, format: 'umd' },
                  { file: pkg.main, format: 'cjs' }
              ],
              plugins: [babel(), closure(), terser()]
          }
      ]
    : [
          {
              input: 'src/index.js',
              output: [
                  { name: 'smartColumns', file: pkg.browser, format: 'umd' },
                  { file: pkg.main, format: 'cjs' }
              ],
              plugins: [
                  babel(),
                  serve({
                      contentBase: ['dist', 'demo'],
                      port: 3000
                  }),
                  livereload()
              ]
          }
      ]
