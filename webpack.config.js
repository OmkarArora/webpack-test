const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
	},
	devtool: "eval-source-map",
	mode: "development",
};
