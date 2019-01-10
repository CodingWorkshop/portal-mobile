const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const prettier = require("prettier");
const {
  spawn
} = require('child_process');

const log = require(path.join(process.cwd(), 'scripts', 'utils', 'log'));

const configuration = process.argv[2] || 'staging';
const envHttpUrl =
  `https://raw.githubusercontent.com/CodingWorkshop/env-portal-mobile/master/.env.${configuration}`;

buildTheme()
  .then(() => produceWebSiteEnvVariable())
  .then(() => runBuild())
  .catch(() => log({
    type: 'ERROR',
    description: `Produce .env.${configuration} error.`
  }));

function produceWebSiteEnvVariable() {
  return axios.get(envHttpUrl)
    .then(res => generateEnvironmentFile(res.data))
    .then(() => log({
      type: 'INFO',
      description: `Produce .env.${configuration} done.`
    }));
}

function runBuild() {
  spawn(/^win/.test(process.platform) ? 'vue-cli-service.cmd' :
    'vue-cli-service', ['build', '--mode', configuration], {
      stdio: 'inherit'
    });
}

function buildTheme() {
  return axios.get(getThemeVariableUrl())
    .then(res => generateVariablesLess(res.data))
    .then(() => log({
      type: 'INFO',
      description: `Build theme over !!!`
    }))
    .catch(err => log({
      type: 'ERROR',
      description: `Build Fail : write file fail ! ${err}`
    }));
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

function generateEnvironmentFile(env) {
  return fs.writeFile(
    path.join(
      process.cwd(),
      `.env.${configuration}`
    ),
    env,
    'utf8'
  );
}
