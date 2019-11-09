import glob from 'glob';
import path from 'path';

import gulpConfig from './gulp.config';
import TerserPlugin from 'terser-webpack-plugin';

const webpackConfig = entryPath => {
  return {
    mode: 'production',
    target: 'web',
    entry: glob.sync(entryPath).reduce((acc, path) => {
      const entry = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
      acc[entry] = path;

      return acc;
    }, {}),
    output: {
      filename: '[name].js',
      path: `${__dirname}/${gulpConfig.public.scripts}`
    },
    node: {
      __dirname: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: true
        })
      ]
    },
    performance: {
      hints: false
    }
  };
};

export default webpackConfig;
