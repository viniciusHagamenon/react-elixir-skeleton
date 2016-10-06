var elixir = require('laravel-elixir')
var babelify = require('babelify')

elixir(function(mix) {
  mix
    .copy('./src/www', './public')
    .sass('./src/scss/app.scss', './public/css/app.css', {
      includePaths: [
        // Css Frameworks Here
      ]
    })
    .browserify('./src/app/app.jsx', './public/js/app.js', null, {
      extensions: ['.js', '.jsx'],
      transform: [[babelify, {}]],
      cache: {},
      packageCache: {},
    })
    .browserSync({
      proxy: false,
      server: {
        baseDir: './public'
      }
    })
})
