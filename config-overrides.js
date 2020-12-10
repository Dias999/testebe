const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      components: path.resolve(__dirname, "src", "app", "components"),
      screens: path.resolve(__dirname, "src", "app", "screens"),
      assets: path.resolve(__dirname, "src", "assets"),
      config: path.resolve(__dirname, "src", "config"),
      utils: path.resolve(__dirname, "src", "utils"),
      hooks: path.resolve(__dirname, "src", "core", "hooks"),
      store: path.resolve(__dirname, "src", "core", "redux", "store"),
      actions: path.resolve(__dirname, "src", "core", "redux", "actions"),
      node_modules: path.resolve(__dirname, "node_modules"),
    },
  };

  return config;
};
