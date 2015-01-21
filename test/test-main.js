var tests = [], file, requireConfig;

for (file in window.__karma__.files) {
  if (/spec\//.test(file)) {
    tests.push(file);
  }
}

requireConfig = {
  baseUrl: '/base/src',
  paths: {
    spec: '../test/spec'
  },

  deps: tests,
  callback: window.__karma__.start
};

requirejs.config(requireConfig);
