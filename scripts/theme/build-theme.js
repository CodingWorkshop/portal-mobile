const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const prettier = require("prettier");
const dayjs = require('dayjs');
const { spawn } = require('child_process');

const configuration =  process.argv[2] || 'staging';
const envHttpUrl = `https://raw.githubusercontent.com/CodingWorkshop/env-portal-mobile/master/.env.${configuration}`;

buildTheme()
  .then(() => produceWebSiteEnvVariable())
  .then(() => runBuild())
  .catch(() => console.log(`[${getNow()}][ERROR]:Produce .env.${configuration} error.`));

function produceWebSiteEnvVariable(){
  return axios.get(envHttpUrl)
  .then(res => generateEnvironmentFile(res.data))
  .then(() => console.log(`[${getNow()}][INFO]:Produce .env.${configuration} done.`));
}

function runBuild(){
  spawn(/^win/.test(process.platform) ? 'vue-cli-service.cmd' : 'vue-cli-service', ['build',  '--mode', configuration],{
    stdio: 'inherit'
  });
}

function buildTheme() {
  return axios.get(getThemeVariableUrl())
    .then(res => generateVariablesLess(res.data))
    .then(() => console.log(`[${getNow()}][INFO]:Build theme over !!!`))
    .catch(err => console.log(
      `[${getNow()}][ERROR]:Build Fail : write file fail ! ${err}`));
}

function getThemeVariableUrl() {
  return `https://raw.githubusercontent.com/CodingWorkshop/env-portal-mobile/master/variables.${configuration}.less`;
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

function generateEnvironmentFile(env){
  return fs.writeFile(
    path.join(
      process.cwd(),
      `.env.${configuration}`
    ),
    env,
    'utf8'
  );
}
