module.exports = {
  baseUrl: process.env.BASE_URL,
  lintOnSave: process.env.NODE_ENV !== 'production',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
