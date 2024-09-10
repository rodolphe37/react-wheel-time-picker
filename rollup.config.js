import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {cssModules} from 'rollup-plugin-css-modules';
import css from "rollup-plugin-import-css";

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'auto'
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        terser(),
        cssModules(),
        css()
    ],
    external: ['react', 'react-dom', 'react-player']  // Ensure these are not bundled
};
