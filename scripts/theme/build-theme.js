var fs = require('fs-extra')
var request = require('request')

/*
    default theme source : https://next.json-generator.com/api/json/get/4kJ9EIlCr
    test theme source : https://next.json-generator.com/api/json/get/Vk_GCJXe8

    ex.1
    >> npm run theme default

    ex.2
    >> npm run theme https://next.json-generator.com/api/json/get/Vk_GCJXe8
*/

const DEFAULT_THEME_SORUCE = 'https://next.json-generator.com/api/json/get/4kJ9EIlCr';
const themeHttpSource = (process.argv[2] === 'default') ? DEFAULT_THEME_SORUCE : process.argv[2]

request.get(themeHttpSource, (error, callback, res) => {

    if (error) {
        console.log(`Build Fail : source error ! ${themeHttpSource}`);
        return;
    }

    const themeColor = JSON.parse(res).themeColor;
    if (!themeColor) {
        console.log(`Build Fail : themeColor undefind !`);
        return;
    }

    fs.writeFile('src/style/theme/_variables.less', BuildThemeFail(themeColor), 'utf8')
        .catch(() => console.log('Build Fail : write file fail !'))
        .then(() => console.log(`Build Success !!!`));

})

function BuildThemeFail(themeColor){
    return '@import \'~iview/src/styles/custom.less\';' + themeColor;  
}