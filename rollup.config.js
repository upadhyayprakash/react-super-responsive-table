import typescript from "rollup-plugin-typescript2";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./dist/index.prod.js" : "./dist/index.dev.js";
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
  ],
  external: ["react", "react-dom", "styled-components"],
};
