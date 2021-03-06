let webpack = require('webpack')

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      DMain: 'app/components/dmain.jsx',
      Nav: 'app/components/Nav.jsx',
      DriverList: 'app/components/driverlist.jsx',
      Driver: 'app/components/driver.jsx',
      LMain: 'app/components/lmain.jsx',
      LoadList: 'app/components/loadlist.jsx',
      Load: 'app/components/load.jsx',
      Add: 'app/components/add.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        /* query: {
          presets: ['react', 'es2015', 'stage-0']
        }, */
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
