# alstart
Choucroute, knacks, et picon bière

## Features :
- HTML5 Boilerplate .htaccess file
- Bower
- Gulpfile for Sass / Less building - autoprefix - minify
- Knacss
- Basic Schnapsit index.html
- Concat & Uglify Javascript files
- SourceMaps generated for Sass & Less

## How to start :
- git clone this repo
- cd to cloned folder
- run `npm install` or `npm update`
- run `bower update`
- run `gulp` / `gulp watch`

## Using with KNACSS :
- Create your own `knacss.less` in your `src/assets/css/` folder (= don't use `dist/vendor/knacss/less/knacss.less` for development)
- Create your own `_00-config.less` in your `src/assets/css/` folder (= don't use `dist/vendor/knacss/less/_00-config.less` for development)
- During development, `knacss.less` and `_00-config.less` file have to be in your `src/assets/css/` folder, and @import all the other modules from `dist/vendor/knacss/less/`

This should be your own `knacss.less` file :

```
@import "_00-config";

// normalize include
@import "/dist/vendor/knacss/less/_01a-normalize"; // normalize

// LESS base styles
@import "/dist/vendor/knacss/less/_01b-base"; // reset and basic styles

// LESS files : chose the ones you need
@import "/dist/vendor/knacss/less/_02-layout"; // alignment, modules, positionning
@import "/dist/vendor/knacss/less/_03-grids"; // grids
@import "/dist/vendor/knacss/less/_04-tables"; // data tables consistency
@import "/dist/vendor/knacss/less/_05-forms"; // forms consistency
@import "/dist/vendor/knacss/less/_06-helpers"; // width and spacers visually classes
@import "/dist/vendor/knacss/less/_07-responsive"; // Responsive Web Design helpers
@import "/dist/vendor/knacss/less/_08-print"; // print quick reset
@import "/dist/vendor/knacss/less/_09-misc"; // skip links, google maps and hyphens
@import "/dist/vendor/knacss/less/_10-styling"; // minor stylings

// WordPress base styles
@import "/dist/vendor/knacss/less/_11-wordpress"; // WordPress reset and basic styles
```


## Crédits :

GitIgnore Mac OSX Crap : https://github.com/github/gitignore/blob/master/Global/OSX.gitignore
