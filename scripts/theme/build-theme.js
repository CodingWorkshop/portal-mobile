const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const prettier = require("prettier");
const dayjs = require('dayjs');

buildTheme();

/*
    default theme source : https://next.json-generator.com/api/json/get/4kJ9EIlCr
    test theme source : https://next.json-generator.com/api/json/get/Vk_GCJXe8

    ex.1
    >> npm run theme default

    ex.2
    >> npm run theme https://next.json-generator.com/api/json/get/Vk_GCJXe8
*/
function buildTheme() {
  return axios.get(prepareThemeHttpSource())
    .then(res => generateCustomLess(res.data))
    .then(() => console.log(`[${getNow()}][INFO]:Build Theme Over !!!`))
    .catch(err => console.log(
      `[${getNow()}][ERROR]:Build Fail : write file fail ! ${err}`));
}

function prepareThemeHttpSource() {
  const DEFAULT_THEME_SORUCE =
    'https://next.json-generator.com/api/json/get/4kJ9EIlCr';

  return ((process.argv[2] === 'default') || !process.argv[2]) ?
    DEFAULT_THEME_SORUCE :
    process.argv[2]
}

function generateCustomLess(res) {
  return fs.writeFile(
    path.join(
      process.cwd(),
      'src',
      'style',
      'custom.less'
    ),
    formatCustomTheme(res),
    'utf8'
  );
}

function formatCustomTheme(res) {
  return prettier.format(res.themeColor, {
    parser: 'less'
  });
}

function getNow() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}
