var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss', 'resources/assets/css');


    mix.styles([
        'app.css',
        'libs/select2.min.css'
    ]);

    mix.scripts([
        'libs/jquery.js',
        '../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'libs/select2.min.js'
    ]);
});
