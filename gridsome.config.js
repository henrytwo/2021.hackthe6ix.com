// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Hack The 6ix',
  siteDescription: 'Hack the 6ix is the largest summer student run, not for profit hackathon located in the heart of Toronto.',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  plugins: [
    {
      use: 'gridsome-plugin-sentry',
      options: {
        dsn: "https://893ae32af2f346cfb25a430f857c3cd3@o418830.ingest.sentry.io/5782997",
        attachProps: true, // defaults to true
        logErrors: true //process.env.NODE_ENV === 'development' // defaults to false, see below for further info
      },
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'k39srzl7t1l0',
        accessToken: 'z26y8JKBMFiKK5YHJ7XcwptGrINVd9D0gLvUx1hcX1s', // required
      },
    },
  ],
};
