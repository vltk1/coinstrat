import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: {
            file: packageJson.main,
            format: 'esm',
            // sourcemap: true,
        },

        plugins: [
            typescript({ tsconfig: 'tsconfig.json' }),
            resolve(),
            commonjs(),
            peerDepsExternal(),
            postcss({
                extract: true,
                modules: true
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),

        ]
    },
    {
        input: 'dist/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [
            dts(),
            // del({ targets: "./dist/types" }),
        ],
    }
]

