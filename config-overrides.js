const { override, fixBabelImports } = require('customize-cra');
const fn = () => {
  console.log(override,fixBabelImports);
  return override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
  );
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);