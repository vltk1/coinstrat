import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';
import { dts } from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'

import { DEFAULT_EXTENSIONS } from "@babel/core";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: {
            file: packageJson.main,
            format: 'cjs',
            // sourcemap: true,
        },

        plugins: [
            typescript({ tsconfig: 'tsconfig.json' }),
            resolve({
                extensions: [".js", ".ts"],
            }),
            commonjs(),
            peerDepsExternal(),
            postcss({
                modules: true
            }),
            babel({
                presets: ["@babel/preset-react"],
                extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
                babelHelpers: "bundled",
            }),
        ]
    },
    {
        input: "dist/components/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [
            dts(),
            del({
                targets: "./dist/components",
                hook: "buildEnd",
            }),
        ],
    },
]

