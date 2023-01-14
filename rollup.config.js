import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: './src/index.ts',
    external: ['react', 'react-dom', 'styled-components'],
    plugins: [
      peerDepsExternal(),
      resolve(),

      babel({
        plugins: ['babel-plugin-styled-components'],
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      typescript(),
      alias({
        resolve: ['.ts', '.tsx', '.js', '.jsx'],
        entries: [
          {
            find: '@src',
            replacement: './src',
          },
          {
            find: '@components',
            replacement: './src/components',
          },
          {
            find: '@hooks',
            replacement: './src/hooks',
          },
          {
            find: '@constants',
            replacement: './src/constants',
          },
        ],
      }),
      terser(),
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
      },
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
  },
];
