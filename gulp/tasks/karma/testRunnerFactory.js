'use strict';

var baseConfig, config, karma;

baseConfig = require('../../../karma/karmaBaseConfiguration');
config = require('../../config').karma;
karma = require('karma').server;

function getBaseConfiguration() {
  var karmaConfig = baseConfig.getConfiguration(config.configFile);

  return karmaConfig;
}

function modifyConfig(configurationDefinition) {
  var i;

  for(i = 0; i < configurationDefinition.modifiers.length; i +=1) {
    configurationDefinition.baseConfig = configurationDefinition.modifiers[i].modifyConfiguration(configurationDefinition.baseConfig);
  }

  return configurationDefinition.baseConfig;
}

function buildTestRunner(modifiers) {
  var karmaConfig;

  karmaConfig = getBaseConfiguration();

  karmaConfig = modifyConfig({
    baseConfig: karmaConfig,
    modifiers: modifiers
  });

  return function(done) {
    console.log('starting Karma with following config: ');
    console.log(karmaConfig);
    karma.start(karmaConfig, done);
  };
}


module.exports = {
  buildTestRunner: buildTestRunner
};
