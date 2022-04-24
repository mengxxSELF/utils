import path from 'path'
// 依赖引用插件 - 在打包第三方模块的过程中，rollup无法直接解析npm模块，
// 因此需要引入插件rollup-plugin-node-resolve并配合之前的commonjs插件来解析这些第三方模块
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import ts from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import { uglify } from 'rollup-plugin-uglify'

const getPath = (_path) => path.resolve(__dirname, _path)

import packageJSON from './package.json'

const extensions = ['.js', '.ts', '.tsx']

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions,
  clean: true,
})

// 基础配置
const commonConf = {
  input: getPath('./src/index.ts'),
  plugins: [resolve(extensions), commonjs(), tsPlugin, json(), uglify()],
}
// 需要导出的模块类型
const outputMap = [
  {
    file: packageJSON.main, // 通用模块
    format: 'umd',
  },
  {
    file: packageJSON.module, // es6模块
    format: 'es',
  },
]

const buildConf = (options) => Object.assign({}, commonConf, options)

export default outputMap.map((output) => buildConf({ output: { name: packageJSON.name, ...output } }))
