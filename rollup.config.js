import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs'
                // sourcemap: true
                // sourceMap — it's extremely helpful for debugging to provide a sourcemap. This option adds a sourcemap inside the generated file, which keeps things simple.
                // https://www.learnwithjason.dev/blog/learn-rollup-js/
            },
            {
                file: packageJson.module,
                format: 'esm'
                // sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            nodeResolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss(),
            terser()
        ],
        external: ['react', 'react-dom']
    },
    {
        // input: "dist/esm/types/index.d.ts",
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.(s[ac]|c)ss$/i]
    }
]
