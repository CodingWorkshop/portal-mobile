const {
  spawn
} = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const dayjs = require('dayjs');

generateCustomStyle();
prepareENV();

function prepareENV() {
  if (process.env.NODE_ENV === 'production') {
    return spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',
      'build'
    ], {
      stdio: 'inherit'
    });
  } else {
    console.log(`[${getNow()}][INFO]:Environment is not production.`);
    console.log(`[${getNow()}][INFO]:Do not execute npm run build.`)
  }
}

function generateCustomStyle() {
  const customStylePath = path.join(
    process.cwd(),
    'src',
    'style',
    'variables.less'
  );
  fs.ensureFile(customStylePath).then(() => {
    console.log(`[${getNow()}][INFO]:generate custom style`);
  })
}

function getNow() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}
