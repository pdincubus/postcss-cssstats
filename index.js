'use strict';

var _ = require('lodash');
var postcss = require('postcss');
var cssstats = require('cssstats');

const plugin = postcss.plugin('cssstats', function(options, callback) {
  if (_.isFunction(options)) {
    callback = options;
    options = {};
  } else {
    options = options || {};
    callback = callback || _.noop;
  }

  return function(css, postcssResult) {
    callback(cssstats(css));
  };
});

plugin.postcss = true;
module.exports = plugin;
