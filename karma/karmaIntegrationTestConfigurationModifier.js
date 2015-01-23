'use strict';

function modifyConfiguration(config){

  config.exclude.push(['test/spec/unit/**/*.js']);

  return config;
}

module.exports = {
  modifyConfiguration: modifyConfiguration
};
