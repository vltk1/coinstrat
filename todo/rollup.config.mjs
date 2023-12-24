import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from "rollup-plugin-dts";

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: {
            file: packageJson.main,
            format: 'esm',
            sourcemap: true,
        },

        plugins: [
            typescript({ tsconfig: 'tsconfig.json' }),
            resolve(),
            commonjs(),
            peerDepsExternal(),
        ]
    },
    {
        input: 'dist/cjs/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    }
]