const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const prettier = require("prettier");
const dayjs = require('dayjs');

const webSiteCode =  (!process.argv[2]) ? 'staging': process.argv[2];
const EnvVariableHttpSource = `https://raw.githubusercontent.com/CodingWorkshop/env-portal-mobile/master/.env.${webSiteCode}`;

buildTheme();

function buildTheme() {
  return axios.get(prepareThemeHttpSource())
    .then(res => generateVariablesLess(res.data))
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

function generateVariablesLess(res) {
  return fs.writeFile(
    path.join(
      process.cwd(),
      'src',
      'style',
      'variables.less'
    ),
    formatLessFile(res),
    'utf8'
  );
}

function formatLessFile(res) {
  return prettier.format(res.themeColor, {
    parser: 'less'
  });
}

function getNow() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}
