import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";

export default defineConfig({
  plugins: [
    pluginBabel({
      // This ensures Babel is used for .tsx/.jsx files
      include: /\.(jsx|tsx)$/,
      babelLoaderOptions: (config, { addPresets }) => {
        // Remove the default preset-react if present
        if (config.presets) {
          config.presets = config.presets.filter(
            (preset) =>
              !(Array.isArray(preset) && preset[0] === "@babel/preset-react"),
          );
        }
        // Add the correct preset-react config for Preact
        addPresets([
          [
            "@babel/preset-react",
            { runtime: "automatic", importSource: "preact" },
          ],
        ]);
      },
    }),
  ],
  output: {
    filenameHash: false,
    filename: {
      js: "[name].js",
    },
  },
  source: {
    entry: {
      main: "./src/main.ts",
      room: "./src/room.tsx",
    },
  },
  tools: {
    htmlPlugin: false,
    rspack: (config) => {
      config.resolve = config.resolve || {};
      config.resolve.alias = {
        ...config.resolve.alias,
        react: "preact/compat",
        "react-dom": "preact/compat",
        "react/jsx-runtime": "preact/jsx-runtime",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom/server": "preact/compat",
      };

      // config.module = config.module || {};
      // config.module.rules = config.module.rules || [];
      // config.module.rules.push({
      //   test: /\.css$/,
      //   use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      // });
    },
  },
  performance: {
    chunkSplit: {
      strategy: "all-in-one",
    },
  },
});
