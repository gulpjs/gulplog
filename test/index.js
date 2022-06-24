'use strict';

var expect = require('expect');

var logger = require('../');

describe('gulplog', function () {
  after(function (done) {
    logger.remove();
    done();
  });

  afterEach(function (done) {
    logger.removeAllListeners();
    done();
  });

  it('should emit the appropriate event when debug/info/warn/error methods are called', function (done) {
    var called = { debug: 0, info: 0, warn: 0, error: 0 };
    function allDone() {
      if (called.debug && called.info && called.warn && called.error) {
        expect(called.debug).toEqual(1);
        expect(called.info).toEqual(1);
        expect(called.warn).toEqual(1);
        expect(called.error).toEqual(1);
        done();
      }
    }

    logger.on('debug', function (msg) {
      expect(msg).toEqual('The MOST verbose!');
      called.debug++;
      allDone();
    });

    logger.on('info', function (msg) {
      expect(msg).toEqual('Some important info');
      called.info++;
      allDone();
    });

    logger.on('warn', function (msg) {
      expect(msg).toEqual('All the warnings to you');
      called.warn++;
      allDone();
    });

    logger.on('error', function (msg) {
      expect(msg).toEqual('OH NO! SOMETHING HAPPENED!');
      called.error++;
      allDone();
    });

    logger.debug('The MOST verbose!');
    logger.info('Some important info');
    logger.warn('All the warnings to you');
    logger.error('OH NO! SOMETHING HAPPENED!');
  });

  it('should support util.format syntax', function (done) {
    logger.on('debug', function (msg) {
      expect(msg).toEqual('printf style!');
      done();
    });

    logger.debug('%s style!', 'printf');
  });

  it('should log an object as it is', function (done) {
    logger.on('debug', function (msg) {
      expect(msg).toEqual({ my: 'obj' });
      done();
    });

    logger.debug({ my: 'obj' });
  });

  it('should log an array as it is', function (done) {
    logger.on('info', function (msg) {
      expect(msg).toEqual([1, 2, 3]);
      done();
    });

    logger.info([1, 2, 3]);
  });
});
