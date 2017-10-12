/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Preparing for production environment. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const info = stats.toJson();

  if (info.hasErrors) {
    return info.errors.map(error => console.log(error.red));
  }

  if (info.hasWarnings) {
    console.log('There are following warnings: '.bold.yellow);
    info.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack statsinfo: ${stats}`);

  console.log(`App has been compiled in production mode`.green);

  return 0;

});