'use strict';

// we do this to have a starting place, it returns a new object each time, so we don't
// have to call Object.create and run into potential issues where they loop over options
// and use object.hasOwnProperty, or have someone accidentally modify the base config.
function getConfiguration(configFileLocation) {
  return {
    configFile: configFileLocation,
    singleRun: true,
    exclude: ['src/_*.js']
  };
}

module.exports = {
  getConfiguration: getConfiguration
};
