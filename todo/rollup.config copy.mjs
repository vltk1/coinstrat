import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
// import typescript from '@rollup/plugin-typescript';
import typescript from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';
import { dts } from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'

let defaults = { compilerOptions: { declaration: true } };
let override = { compilerOptions: { declaration: true } };

import { DEFAULT_EXTENSIONS } from "@babel/core";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'react-lib'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        external: [
            "styled-components"
        ],
        plugins: [
            typescript({
                tsconfigDefaults: defaults,
                tsconfig: "tsconfig.json",
                tsconfigOverride: override
            }),
            resolve({
                extensions: [".ts", ".tsx"],
            }),
            commonjs(),
            peerDepsExternal(),
            postcss({
                extract: false,
                modules: true
            }),
            babel({
                presets: ["@babel/preset-react"],
                extensions: [...DEFAULT_EXTENSIONS, ".js", ".ts", ".tsx"],
                babelHelpers: "bundled",
            }),
        ]
    },
    {
        input: 'dist/esm/components/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        plugins: [
            dts(),
            del({
                targets: [
                    "./dist/cjs/components",
                    "./dist/cjs/index.d.ts",
                    "./dist/esm/components",
                    "./dist/esm/index.d.ts",
                ],
                hook: "buildEnd",
            }),
        ],
    },
]


