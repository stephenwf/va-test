require('@canvas-panel/core/lib/polyfill');

const patchwork = require('@canvas-panel/patchwork-plugin');


patchwork.help();
patchwork.create(document.getElementById('app'), {
  manifest: 'https://stephenwf.github.io/patchwork.json',
  // canvas: 1,
  fitContainer: false,
  cssClassMap: {
    annotation: 'annotation-pin',
  },
  cssClassPrefix: 'patchwork-'
});
