import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svgr from "@svgr/rollup";
import image from "rollup-plugin-img";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import { createFilter } from "rollup-pluginutils";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import ignore from "rollup-plugin-ignore";

import packageJson from "./package.json" assert { type: "json" };

const external = createFilter(["react", "react-dom"], null, {
  resolve: false,
});
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      svgr(),
      image({
        limit: 10000,
        extensions: /\.(png|jpg|jpeg|gif)$/,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      ignore(["src/stories/**/*"]),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
