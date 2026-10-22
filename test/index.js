"use strict";

var assert = require("node:assert");
var { after, afterEach, describe, it } = require("node:test");

var logger = require("../");

describe("gulplog", function () {
  after(function () {
    logger.remove();
  });

  afterEach(function () {
    logger.removeAllListeners();
  });

  it("should emit the appropriate event when debug/info/warn/error methods are called", function () {
    var called = { debug: 0, info: 0, warn: 0, error: 0 };
    function allDone() {
      if (called.debug && called.info && called.warn && called.error) {
        assert.deepStrictEqual(called.debug, 1);
        assert.deepStrictEqual(called.info, 1);
        assert.deepStrictEqual(called.warn, 1);
        assert.deepStrictEqual(called.error, 1);
      }
    }

    logger.on("debug", function (msg) {
      assert.deepStrictEqual(msg, "The MOST verbose!");
      called.debug++;
      allDone();
    });

    logger.on("info", function (msg) {
      assert.deepStrictEqual(msg, "Some important info");
      called.info++;
      allDone();
    });

    logger.on("warn", function (msg) {
      assert.deepStrictEqual(msg, "All the warnings to you");
      called.warn++;
      allDone();
    });

    logger.on("error", function (msg) {
      assert.deepStrictEqual(msg, "OH NO! SOMETHING HAPPENED!");
      called.error++;
      allDone();
    });

    logger.debug("The MOST verbose!");
    logger.info("Some important info");
    logger.warn("All the warnings to you");
    logger.error("OH NO! SOMETHING HAPPENED!");
  });

  it("should support util.format syntax", function () {
    logger.on("debug", function (msg) {
      assert.deepStrictEqual(msg, "printf style!");
    });

    logger.debug("%s style!", "printf");
  });

  it("should log an object as it is", function () {
    logger.on("debug", function (msg) {
      assert.deepStrictEqual(msg, { my: "obj" });
    });

    logger.debug({ my: "obj" });
  });

  it("should log an array as it is", function () {
    logger.on("info", function (msg) {
      assert.deepStrictEqual(msg, [1, 2, 3]);
    });

    logger.info([1, 2, 3]);
  });

  it("logs all arguments if first argument is not a string", function () {
    logger.on("info", function (arg1, arg2) {
      assert.deepStrictEqual(arg1, [1, 2, 3]);
      assert.deepStrictEqual(arg2, [4, 5, 6]);
    });

    logger.info([1, 2, 3], [4, 5, 6]);
  });
});
