const {
  spawn
} = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const log = require(path.join(process.cwd(), 'scripts', 'utils', 'log'));

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
    log({
      type: 'INFO',
      description: `Environment is not production.`
    });

    log({
      type: 'INFO',
      description: `Do not execute npm run build.`
    });
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
    log({
      type: 'INFO',
      description: `generate custom style`
    });
  })
}
