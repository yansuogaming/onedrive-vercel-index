const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'vi-VN',
    locales: ['de-DE', 'en', 'es', 'zh-CN', 'hi', 'id', 'tr-TR', 'zh-TW', 'vi-VN']
  },
  localePath: path.resolve('public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——'
}
