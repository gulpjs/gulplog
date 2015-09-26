<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# gulplog

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Gitter chat][gitter-image]][gitter-url]

Logger for gulp and gulp plugins

## Usage

```js
var logger = require('gulplog');

// logs strings
logger.debug('The MOST verbose!');
logger.info('Some important info');
logger.warn('All the warnings to you');
logger.error('OH NO! SOMETHING HAPPENED!');

// supports util.format!
logger.info('%s style!', 'printf');

// log anything
logger.debug({ my: 'obj' });
logger.info([1, 2, 3]);
```

## API

#### logger.debug(msg)

Highest log level.  Typically used for debugging purposes.

If the first argument is a string, all arguments are passed to node's
`util.format()` before being emitted.

#### logger.info(msg)

Standard log level.  Typically used for user information.

If the first argument is a string, all arguments are passed to node's
`util.format()` before being emitted.

#### logger.warn(msg)

Warning log level.  Typically used for warnings.

If the first argument is a string, all arguments are passed to node's
`util.format()` before being emitted.

#### logger.error(msg)

Error log level.  Typically used when things went horribly wrong.

If the first argument is a string, all arguments are passed to node's
`util.format()` before being emitted.

## License

MIT

[downloads-image]: http://img.shields.io/npm/dm/gulplog.svg
[npm-url]: https://npmjs.org/package/gulplog
[npm-image]: http://img.shields.io/npm/v/gulplog.svg

[travis-url]: https://travis-ci.org/gulpjs/gulplog
[travis-image]: http://img.shields.io/travis/gulpjs/gulplog.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.png
