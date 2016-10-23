# Swill Boilerplate

<p align="center">
    <img src="http://tiagoporto.github.io/swillboilerplate.rocks/img/logos/logo.png" alt="Swill Boilerplate Logo">
</p>

> The front-end Boilerplate that you need to start easily customizable multi-device development.
>
> Visit the [website](http://swillboilerplate.rocks/).

## Table of Contents

* [Folder Structure](#folder-structure)
* [Dependencies](#dependencies)
* [Boilerplate](#boilerplate)
    * [Usage](#usage)
    * [Tasks](#tasks)
    * [Bitmap Sprite](#bitmap-sprite)
    * [Vector Sprite](#vector-sprite)
* [License](#license)


## Folder Structure

```
./
├──┐
│  │
│  ├─ app // Public files
│  │  │
│  │  ├─ css
│  │  │  └─ // Public styles
│  │  │
│  │  ├─ fonts
│  │  │  └─ // Web Fonts
│  │  │
│  │  ├─ img
│  │  │  │
│  │  │  ├─ copyright // Images with copyright metadata
│  │  │  │
│  │  │  ├─ logos // Logos of the projet
│  │  │  │
│  │  │  └─ // Public images
│  │  │
│  │  ├─ js
│  │  │  └─ // Public scripts
│  │  │
│  │  ├─ apple-touch-icon.png // Icon for Safari on iOS
│  │  │
│  │  ├─ favicon.ico //Icon for address bar and bookmark
│  │  │
│  │  ├─ index.html
│  │  │
│  │  └─ // HTML, PHP, etc Files
│  │
│  ├─ spec // Scripts test
│  │
│  └─ src // Source files for the projects
│       │
│       ├─ handlebars
│       │  │
│       │  ├─ includes // Handlebars partials
│       │  │
│       │  └─ // Handlebars templates
│       │
│       ├─ images // Original images, don't compressed
│       │  │
│       │  ├─ sprite // Images to generate the sprite
│       │  │
│       │  ├─ touch // Icons
│       │  │   │
│       │  │   ├─ chrome-touch-icon-192x192.png // Icon for Chrome on Android
│       │  │   │
│       │  │   ├─ icon-128x128.png // Icon for Firefox on FirefoxOS
│       │  │   │
│       │  │   ├─ tile.png // Tile icon for Win8
│       │  │   │
│       │  │   └─ tile-wide.png // Wide tile icon for Win8
│       │  │
│       │  └─ // .jpg, .jpeg, .gif, .svg and .bmp to be compressed
│       │
│       ├─ scripts
│       │  │
│       │  ├─ settings
│       │  │  │
│       │  │  ├─ call_plugins.js // Call the plugins after page load
│       │  │  │
│       │  │  └─ google_analytics.js
│       │  │
│       │  └─ // Scripts
│       │
│       ├─ stylesheets
│       │    │
│       │    ├─ components
│       │    │
│       │    ├─ helpers
│       │    │  │
│       │    │  ├─ functions // All files here will be concatenated to ../functions.{scss, styl}
│       │    │  │
│       │    │  ├─ mixins // All files here will be concatenated to ../mixins.{scss, styl}
│       │    │  │
│       │    │  └─ _helpers.{scss, styl} // Helper tips to preprocessor syntax
│       │    │
│       │    ├─ partials // Styles to base tags
│       │    │
│       │    ├─ settings
│       │    │  │
│       │    │  ├─ _variables.{sass, styl}
│       │    │  │
│       │    │  └─ _web-fonts.{sass, styl}
│       │    │
│       │    ├─ _base.{sass, styl} // Main Styles
│       │    │
│       │    └─ styles.{sass, styl} // Base file with imports
│       │
│       ├─ vendors // Third-party code
│       │
│       └─ header-comments.txt // Header to styles and Scripts
│
├─ .bowerrc // Bower configuration file
├─ .csslintrc // CSSLint configuration file
├─ .editorconfig // Editorconfig configuration file
├─ .eslintrc // ESLint configuration file
├─ bower.json // Bower dependencies
├─ config.json // Swill configuration file
├─ gulpfile.js // Gulp file
├─ LICENSE.md // Swill License
├─ karma.conf.js // Karma configuration file
├─ package.json // NPM dependencies
└─ README.md // Documentation
```

## Dependencies

1. Install [EditorConfig](http://editorconfig.org/)

    * Download and install the [EditorConfig plugin](http://editorconfig.org/#download) for your text editor.

1. Download and install [Node.js](http://nodejs.org/download/)

    `Select npm package manager`

1. Install [Gulp](http://gulpjs.com/)

    * Open command line and execute

    ```sh
    $ npm install -g gulp
    ```


1. Install [Bower](http://bower.io/)

    * Execute

    ```sh
    $ npm install -g bower
    ```


## Boilerplate

* JavaScript files in `src/scripts` named with `*_IGNORE.js` will be ignored and won't be published, named with `*_SEPARATE.js` won't be concatenated and will be generated separately.
    - Example
    `myplugin_SEPARATE.js` will be published as `myplugin.js`.

* The folder `public/img` is cleaned when some tasks are executed, the images come from ` src/images`, but if you work with copyrighted images you shouldn't use compression, because it removes the metadata from the files. You can place images directly in the `public/img/copyright`, they won't be deleted.

    > If for some other reason you want to use other folders directly in the `public/img`, add the folder to the task `clean` in `gulpfile.js`, and it won't be deleted.


### Usage

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



1. Open the files `.csslintrc`, `.editorconfig`, and `.eslintrc` and set your configs to CSSLint, EditorConfig and ESLint respectively.

1. Search in the folder project by `{Title}` and `{-}`, and replace with the corrected information.

1. Open the file `src/header-comments.txt` and set your project header.

1. Open the terminal and go to the local folder.

1. Install [NPM](https://www.npmjs.com/) dependencies.

    * Execute

    ```sh
    $ npm install
    ```

1. Run all the settings and choose the CSS preprocessor that you will use (execute only once).
    * Run the task `setup` and pass the parameter the preprocessor.

    ```sh
    $gulp setup --sass|stylus
    ```

1.  On your first run, execute the task `gulp` with parameter `compile` and start the development

    ```sh
    $ gulp --compile
    ```


### Tasks

**Default Task** - serve the project and watch (Alias to `gulp serve`)

```sh
$ gulp
```

**Default Task** (the default task accepts the parameter --compile) - clean assets, compile, watch and serve the project.

```sh
$ gulp --compile
```

**Compile Task** - clean assets and compile the project.

```sh
$ gulp compile
```

**Build Task** - build the project

```sh
$ gulp build
```

**Build Task** (the build task accepts the parameter --serve) - build the project and serve built project.

```sh
$ gulp build --serve
```

**Gh-pages Task** - build the project and push the output folder to gh-pages branch

```sh
$ gulp gh-pages
```

**Test Task** - run unit tests

```sh
$ gulp test
```


### Bitmap Sprite

This boilerplate uses [gulp.spritesmith](https://www.npmjs.org/package/gulp.spritesmith) to generate bitmap sprites.

When the sprite is generated, a file `_bitmap-sprite.{styl,scss}` is created with four mixins and the variables of the parameters of the images, like height and width (the names of the variables are the same as the original filename before the compilation).

Just use the mixins with the variables as parameters.

**Example**

```styl
#arrow
    sprite($left_arrow)

    &:hover
        spritePosition($right_arrow)
```

**Output**

```css
#arrow {
    background-image: url(../images/sprite.png);
    background-position: 0px 0px;
    width: 32px;
    height: 32px;
}
#arrow:hover {
    background-position: 0px -34px;
}
```

### Vector Sprite

SVG sprites are generated with [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite), and as a fallback, all the SVG sprites are converted to `.png` with [gulp-svg2png](https://github.com/akoenig/gulp-svg2png)

* Put the icon in `src/images/sprite`.
* In HTML put the class in elements

    ```html
    <i class="icon-star-dims icon-star"><i>
    ```

    The class `-dims` gets the dimensions and the other the position of the icon in sprite.

    The classname is defined by the `.svg` filename, example:

    * `moon.svg` the classname uses the prefix `icon-` and the filename of the svg `moon`.
    * If you want to use a hover, just name the file `moon~hover.svg` and use the class `sgv-moon`.


## License

Swill Boilerplate is released under the terms of the [MIT license](https://github.com/tiagoporto/swill-boilerplate/blob/master/LICENSE).
