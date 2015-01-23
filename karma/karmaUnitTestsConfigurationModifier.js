'use strict';

function modifyConfiguration(config){

  config.exclude.push(['test/spec/integration/**/*.js']);

  return config;
}

module.exports = {
  modifyConfiguration: modifyConfiguration
};
