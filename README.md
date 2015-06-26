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
- Create your own `styles.less` in your `src/assets/css/` folder (= don't use `src/vendor/knacss/less/knacss.less` for development)
- Create your own `_00-config.less` in your `src/assets/css/` folder (= don't use `src/vendor/knacss/less/_00-config.less` for development)
- During development, `styles.less` and `_00-config.less` file have to be in your `src/assets/css/` folder, and @import all the other modules from `src/vendor/knacss/less/`

This should be your own `styles.less` file :

```
@import "_00-config";

// normalize include
@import "/src/vendor/knacss/less/_01a-normalize"; // normalize

// LESS base styles
@import "/src/vendor/knacss/less/_01b-base"; // reset and basic styles

// LESS files : chose the ones you need
@import "/src/vendor/knacss/less/_02-layout"; // alignment, modules, positionning
@import "/src/vendor/knacss/less/_03-grids"; // grids
@import "/src/vendor/knacss/less/_04-tables"; // data tables consistency
@import "/src/vendor/knacss/less/_05-forms"; // forms consistency
@import "/src/vendor/knacss/less/_06-helpers"; // width and spacers visually classes
@import "/src/vendor/knacss/less/_07-responsive"; // Responsive Web Design helpers
@import "/src/vendor/knacss/less/_08-print"; // print quick reset
@import "/src/vendor/knacss/less/_09-misc"; // skip links, google maps and hyphens
@import "/src/vendor/knacss/less/_10-styling"; // minor stylings

// WordPress base styles
@import "/src/vendor/knacss/less/_11-wordpress"; // WordPress reset and basic styles
```


## Crédits :

GitIgnore Mac OSX Crap : https://github.com/github/gitignore/blob/master/Global/OSX.gitignore
