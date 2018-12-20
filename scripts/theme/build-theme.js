const fs = require('fs-extra');
const request = require('request');
const prettier = require("prettier");

/*
    default theme source : https://next.json-generator.com/api/json/get/4kJ9EIlCr
    test theme source : https://next.json-generator.com/api/json/get/Vk_GCJXe8

    ex.1
    >> npm run theme default

    ex.2
    >> npm run theme https://next.json-generator.com/api/json/get/Vk_GCJXe8
*/

const DEFAULT_THEME_SORUCE =
  'https://next.json-generator.com/api/json/get/4kJ9EIlCr';
const themeHttpSource = (process.argv[2] === 'default') ? DEFAULT_THEME_SORUCE :
  process.argv[2]

request.get(themeHttpSource, (error, callback, res) => {

  if (error) {
    console.log(`Build Fail : source error ! ${themeHttpSource}`);
    return;
  }

  let themeColor = '';
  try {
    themeColor = JSON.parse(res).themeColor;
  } catch (error) {
    console.log(res, error);
    console.log(`Build Fail : themeColor undefined !`);
    return;
  }

  themeColor = formatCustomTheme(themeColor);
  fs.writeFile(
      'src/style/custom.less',
      themeColor,
      'utf8'
    )
    .catch(() => console.log('Build Fail : write file fail !'))
    .then(() => console.log(`Build Success !!!`));

  // fs.readFile(
  //   'src/style/theme/_variables.less'
  // )

})

function formatCustomTheme(themeColor) {
  return prettier.format(themeColor, {
    parser: 'less'
  });
}
