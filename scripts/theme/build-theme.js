// import { AllTheme } from 'ic-theme-relation'
var fs = require('fs-extra')
var request = require('request')

const AllTheme = [{
        name: 'default',
        relation: {
            iviewT: 'default',
            customT: 'default'
        }
    },
    {
        name: 'dark',
        relation: {
            iviewT: 'dark',
            customT: 'dark'
        }
    },
    {
        name: 'base',
        relation: {
            iviewT: 'base',
            customT: 'default'
        }
    },
    {
        name: 'http',
        relation: {
            iviewT: 'http',
            customT: 'http'
        }
    }
]

const input = (process.argv[2]) ? process.argv[2] : 'default'
const isHttpTheme = input.substr(0, 7) === 'http://'

if (isHttpTheme) {
    BuildThemeByHttp(input)
    return;
}

const themeName = (checkInputThemeIsHave(input)) ? input : 'default'
BuildThemeByLocal(themeName);

// 驗證 input 的 theme 是否存在
function checkInputThemeIsHave(themeName) {
    return AllTheme.some(x => x.name == themeName)
}

/* Build Theme 來源為 Local */
function BuildThemeByLocal(themeName) {
    const themeRelation = AllTheme.filter(t => t.name == themeName)[0].relation;
    const IViewTheme = themeRelation.iviewT;
    const CustomTheme = themeRelation.customT;
    ChangeIViewTheme(IViewTheme)
    ChangeCustomTheme(CustomTheme)
}

/* Build Theme 來源為 Http */
function BuildThemeByHttp(httpTheme) {
    request.get(httpTheme, (error, callback, res) => {
        if (!res) {
            console.log('BuildThemeByHttp link 404 undefind');
            return;
        }
        const httpTheme = JSON.parse(res);
        const iviewTheme = httpTheme.iviewTheme;
        const customTheme = httpTheme.customTheme;
        IViewThemeByHttp(iviewTheme);
        CustomThemeByHttp(customTheme);
        ChangeIViewTheme('http')
        ChangeCustomTheme('http')
    })
}

/* Custom Theme 來源為 Local */
// Main
function ChangeCustomTheme(theme) {
    fs.readFile('src/style/theme/custom/build/_build-theme-local.less', 'utf8')
        .catch(err => console.log('ChangeCustomTheme read fail :　', err))
        .then(baseTheme => fs.writeFile('src/style/theme/custom-theme.less',
            setChangeCustomThemeBase(baseTheme, theme), 'utf8'))
        .catch(err => console.log('ChangeCustomTheme write fail :　', err))
        .then(() => console.log(
            `Build ChangeCustomTheme ${theme} success at ${new Date()}`))
}
// 編譯字串處理
function setChangeCustomThemeBase(baseTheme, theme) {
    baseTheme = baseTheme.split('setTheme')
    return baseTheme[0] + 'theme-' + theme + baseTheme[1]
}

/* IView Theme 來源為 Local */
// Main
function ChangeIViewTheme(theme) {
    fs.readFile('src/style/theme/iview/build/_build-theme-local.less', 'utf8')
        .catch(err => console.log('ChangeIViewTheme read fail :　', err))
        .then(baseTheme => fs.writeFile('src/style/theme/iview-theme.less',
            setChangeIViewThemeBase(baseTheme, theme), 'utf8'))
        .catch(err => console.log('ChangeIViewTheme write fail :　', err))
        .then(() => console.log(
            `Build ChangeIViewTheme ${theme} success at ${new Date()}`))
}
// 編譯字串處理
function setChangeIViewThemeBase(baseTheme, theme) {
    baseTheme = baseTheme.split('setTheme')
    return baseTheme[0] + 'theme-' + theme + baseTheme[1]
}



/* 產出 Color 來源為 Http 的 Custom-theme */
function CustomThemeByHttp(httpColor) {
    fs.readFile('src/style/theme/custom/build/_build-theme-http.less', 'utf8')
        .catch(err => console.log('CustomThemeByHttp read fail :　', err))
        .then(baseTheme => fs.writeFile('src/style/theme/custom/_theme-http.less',
            setCustomThemeByHttpBase(baseTheme, httpColor), 'utf8'))
        .catch(err => console.log('CustomThemeByHttp write fail :　', err))
        .then(() => console.log(`Custom httpTheme edit success`))
}
// 編譯字串處理
function setCustomThemeByHttpBase(baseTheme, httpColor) {
    return httpColor + baseTheme;
}

/* 產出 Color 來源為 Http 的 IView-theme */
function IViewThemeByHttp(httpColor) {
    fs.writeFile('src/style/theme/iview/_theme-http.less', httpColor, 'utf8')
        .catch(err => console.log('IViewThemeByHttp write fail :　', err))
        .then(() => console.log(`IView httpTheme edit success`))
}