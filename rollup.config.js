import typescript from "rollup-plugin-typescript2";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
import versionInjector from "rollup-plugin-version-injector";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile =
  NODE_ENV === "production" ? "./dist/index.prod.js" : "./dist/index.dev.js";

const styledComponentsTransformer = createStyledComponentsTransformer({
  displayName: true,
});

export default {
  input: "src/index.tsx",
  output: [
    {
      file: outputFile,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript({
      transformers: [
        () => ({
          before: [styledComponentsTransformer],
        }),
      ],
    }),
    commonjs(),
    NODE_ENV === "production" && terser(),
    NODE_ENV === "production" &&
      replace({
        exclude: "node_modules/**",
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
      }),
    versionInjector(),
  ],
  external: ["react", "react-dom", "styled-components"],
};
