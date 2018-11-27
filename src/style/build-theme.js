console.log('Theme build start');

var fs = require('fs-extra');
var request = require('request');

const input = process.argv[2];
const isHttpTheme = process.argv[2].substr(0, 4) === 'http';

// 設置要編譯的 Theme 來源為Http
if (isHttpTheme) {
  applyCustomizeTheme(input);
  return;
}

// 設置要編譯的 Theme 來源為本機
const ALL_THEME = ['light', 'dark', 'fb'];
const SET_THEME =
  'theme-' + (ALL_THEME.some(i => i == input) ? input : 'light');
applyLocalTheme(SET_THEME);
console.log(SET_THEME + ' build success!');

/* 將 Theme 寫入 Base*/
function BuildLocalTheme(baseTheme, setTheme) {
  baseTheme = baseTheme.split('setTheme');
  return (
    baseTheme[0] +
    setTheme +
    baseTheme[1] +
    'theme' +
    baseTheme[2] +
    setTheme +
    baseTheme[3]
  );
}

/* 套用開發好的主題 */
function applyLocalTheme(setTheme) {
  fs.readFile('./././src/style/themes/_set-theme.scss', 'utf8')
    .catch(err => console.log(err))
    .then(baseTheme =>
      fs.writeFile(
        './././style/themes/build-theme.scss',
        BuildLocalTheme(baseTheme, setTheme),
        'utf8'
      )
    )
    .then(() => console.log(`build success at ${new Date()}`))
    .catch(err => console.log(err));
}

/* 套用客製化的顏色 */
function applyCustomizeTheme(httpTheme) {
  fs.readFile(
    './././style/themes/_set-customize-theme.scss',
    'utf8',
    (e, baseTheme) => {
      baseTheme = baseTheme.split('//customize-color');
      request.get(httpTheme, (error, response, color) => {
        baseTheme = baseTheme[0] + JSON.parse(color).theme + baseTheme[1];
        fs.writeFile(
          './././src/style/themes/_theme-customize.scss',
          baseTheme,
          'utf8',
          err => {
            if (err) {
              console.log(err);
              throw err;
            }
          }
        );
        applyLocalTheme('theme-customize');
      });
    }
  );
  console.log('theme-customize build success!');
}
