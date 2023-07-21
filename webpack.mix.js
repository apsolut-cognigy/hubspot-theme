const mix = require('laravel-mix');
require('mix-tailwindcss');
/**
 * Laravel Mix Asset Management
 * Cognigy by Aleksandar Perisic
 * @type {string}
 */

// Options
let setPub = './';
mix.setPublicPath(setPub);

// Front-end
mix.js('source/theme.js', 'js');

mix.sass('source/theme.scss', 'css')
        .tailwind();

// Version
if (mix.inProduction()) {
    mix.version();
}

// mix.browserSync('domain.local');
// mix.browserSync({
//     server: "./modules/dev-tailwind.modules/module.html"
//     // proxy: 'https://ddev.site',
// });
mix.options({
    processCssUrls: false
});
mix.webpackConfig({
stats: {
    children: true,
},});