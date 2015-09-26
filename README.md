# gulplog

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
