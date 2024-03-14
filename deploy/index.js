const fs = require("fs");
const { buildSync } = require("esbuild");

const package = require("../package.json");

buildSync({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: "node",
  treeshaking: true,
  external: [],
  tsconfig: "tsconfig.json",
});

const file = Object.assign({}, package, {
  dependencies: {},
  devDependencies: {},
});

fs.writeFileSync("dist/package.json", JSON.stringify(file));
