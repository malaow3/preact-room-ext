import { build } from "esbuild";

// function copyFile(src, dest) {
//     fs.copyFileSync(src, dest);
// }

build({
	entryPoints: ["src/room.tsx"],
	bundle: true,
	outfile: "dist/room.js",
	minify: false,
	sourcemap: true,
	jsxFactory: "h",
	jsxFragment: "Fragment",
	define: { "process.env.NODE_ENV": '"production"' },
}).catch(() => process.exit(1));

build({
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
