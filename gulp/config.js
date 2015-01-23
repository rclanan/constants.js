var dest, src, test;

dest = './dist';
src = './src';
test = './test';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  browserify: {
    // A separate bundle will be generated for each bundle config in the list below
    bundleConfigs: [{
      entries: src + '/constants.js',
      dest: dest,
      outputName: 'constants.js',
      require: [],
      external: []
    }]
  },
  production: {
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
