import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from "../webpack.config.dev.js";

// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {});
server.listen(8080);