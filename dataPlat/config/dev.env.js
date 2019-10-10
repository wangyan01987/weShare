'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // Base_URL:'"http://172.168.1.100:8080/"',
  Base_URL:'"http://192.168.0.103:6689/api/"',
});
