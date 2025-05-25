const fs = require("fs");
const esbuild = require("esbuild");

function copyFile(src, dest) {
    fs.copyFileSync(src, dest);
}

esbuild.build({
    entryPoints: ["src/room.jsx"],
    bundle: true,
    outfile: "dist/room.js",
    minify: false,
    sourcemap: true,
    jsxFactory: "h",
    jsxFragment: "Fragment",
    define: { "process.env.NODE_ENV": '"production"' },
}).catch(() => process.exit(1));

esbuild.build({
    entryPoints: ["src/main.js"],
    bundle: true,
    outfile: "dist/main.js",
    minify: false,
    sourcemap: true,
    jsxFactory: "h",
    jsxFragment: "Fragment",
    define: { "process.env.NODE_ENV": '"production"' },
}).catch(() => process.exit(1));

// copyFile("manifest.json", "dist/manifest.json");
