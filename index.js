'use strict';

var _ = require('lodash');
var postcss = require('postcss');
var cssstats = require('cssstats');

const plugin = (options = {}) => {
  checkOpts(options);

  if (_.isFunction(options)) {
    callback = options;
    options = {};
  } else {
    options = options || {};
    callback = callback || _.noop;
  }

  return {
    postcssPlugin: 'cssstats',
    Once (css, { postcssResult }) {
      cssstats(css)
    }
  }
};

plugin.postcss = true;
module.exports = plugin;
