# Swill Boilerplate

<p align="center">
    <img src="http://tiagoporto.github.io/swillboilerplate.rocks/img/logos/logo.png" alt="Swill Boilerplate Logo">
</p>

> The front-end Boilerplate that you need to start easily customizable multi-device development.
>
> Visit the [website](http://swillboilerplate.rocks/).

### Config.json

1. Open the file [`config.json`](#config) and setting as needed.

    #### basePaths

    Type: `Object`

    Application paths.


    #### components

    Type: `Boolean`

    Basic styles to [components](http://tiagoporto.github.io/swill-boilerplate/components.html), only available with Stylus.

    #### es6

    Type: `Boolean`

    If use ECMAScript 6.

    #### outdatedBrowser

    Type: `Boolean`

    If use outdatedBrowser.

    #### logodownloadtip

    Type: `Boolean`

    If use jQuery Logo Downloadtip.

    #### jquery

    Type: `Boolean`

    If use jQuery.

    #### lintCSS

    Type: `Boolean`

    If use lint CSS.

    #### lintJS

    Type: `Boolean`

    #### inlineSVG

    Type: `Boolean`

    If put SVG inline.

    #### handlebars

    Type: `Boolean`

    If use handlebars template.

    #### autoprefixerBrowsers

    Type: `Array`

    Autoprefixer option, see the autoprefixer [docs](https://github.com/postcss/autoprefixer#options).

    #### browserSync

    Type: `Object`

    BrowserSync options, see the browsersync [docs](https://www.browsersync.io/docs/options/).

    If you use dynamic files, it's necessary to replace the server option by proxy.

    * Example

    ```json
    "browserSyncConfig": {
        "notify": false,
        "logPrefix": "BrowserSync",
        "server": {
            "baseDir": ["src/", "public/"]
        }
    }
    ```

    ```json
    "browserSyncConfig": {
        "notify": false,
        "logPrefix": "BrowserSync",
        "proxy": "localhost/swill-boilerplate/public/"
    }
    ```


    #### browserSyncBuild

    Type: `Object`

    BrowserSync options for the built project, see the browsersync [docs](https://www.browsersync.io/docs/options/).


## License

Swill Boilerplate is released under the terms of the [MIT license](https://github.com/tiagoporto/swill-boilerplate/blob/master/LICENSE).
