const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#0C5386',
      '@success-color': '#112D3F',
      '@link-color': '#53A1F9',
      '@error-color': '#fa5849'
    },
  }),
  
);