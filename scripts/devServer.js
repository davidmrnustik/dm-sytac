import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from "../webpack.config.dev.js";

// initialize of webpack-dev-server for development environment
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {});
server.listen(8080);