const fs = require('fs-extra');
const path = require('path');
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

const variablesStylePath = path.join(process.cwd(), 'src', 'style',
  'variables.less');

const customStylePath = path.join(process.cwd(), 'src', 'style',
  'custom.less');

request.get(themeHttpSource, (error, callback, res) => {

  if (error) {
    console.log(`Build Fail : source error ! ${themeHttpSource}`);
  }

  fs.writeFile(
      customStylePath,
      formatCustomTheme(res),
      'utf8'
    )
    .then(() => console.log(`Build Success !!!`))
    .catch(() => console.log('Build Fail : write file fail !'));

  fs.readFile(
      variablesStylePath
    ).then(variablesFile => fs.writeFile(
      variablesStylePath,
      `${variablesFile}`.replace(/\/\/ /, '')))
    .catch(err => console.log(
      `[ERROR]:Build Main Style Error - ${err}`))

})

function formatCustomTheme(res) {
  let themeColor = '';
  try {
    themeColor = JSON.parse(res).themeColor;
  } catch (error) {
    console.log(res, error);
    console.log(`Build Fail : themeColor undefined !`);
    return ``;
  }

  return prettier.format(themeColor, {
    parser: 'less'
  });
}
