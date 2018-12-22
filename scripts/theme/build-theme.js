const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const prettier = require("prettier");
const dayjs = require('dayjs');
const { spawn } = require('child_process');

const webSiteCode =  (!process.argv[2]) ? 'staging': process.argv[2];
const EnvVariableHttpSource = `https://raw.githubusercontent.com/CodingWorkshop/env-portal-mobile/master/.env.${webSiteCode}`;

buildTheme()
  .then(() => produceWebSiteEnvVariable())
  .then(() => RunBuild())
  .catch(() => console.log(`[${getNow()}][ERROR]:Produce WebSite EnvVariable Error.`));

function produceWebSiteEnvVariable(){
  return axios.get(EnvVariableHttpSource)
  .then(res => generateEnvVariable(res.data))
  .then(() => console.log(`[${getNow()}][INFO]:Produce WebSite EnvVariable Done.`));
}

function RunBuild(){
  spawn(/^win/.test(process.platform) ? 'vue-cli-service.cmd' : 'vue-cli-service', ['build',  '--mode', webSiteCode],{
    stdio: 'inherit'
  });
}

function buildTheme() {
  return axios.get(prepareThemeHttpSource())
    .then(res => generateVariablesLess(res.data))
    .then(() => console.log(`[${getNow()}][INFO]:Build Theme Over !!!`))
    .catch(err => console.log(
      `[${getNow()}][ERROR]:Build Fail : write file fail ! ${err}`));
}

function prepareThemeHttpSource() {
  return `https://raw.githubusercontent.com/CodingWorkshop/env-portal-mobile/master/variables.${webSiteCode}.less`;
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
  return prettier.format(res, {
    parser: 'less'
  });
}

function getNow() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}

function generateEnvVariable(env){
  return fs.writeFile(
    path.join(
      process.cwd(),
      `.env.${webSiteCode}`
    ),
    env,
    'utf8'
  );
}
