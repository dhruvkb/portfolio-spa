module.exports = {
  presets: [
    '@vue/app',
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    [
      'prismjs',
      {
        languages: [
          'java',
          'javascript',
          'latex',
          'markdown',
          'python',
          'rest',
          'yaml'
        ],
        plugins: ['autolinker'],
        theme: 'solarizedlight',
        css: true
      }
    ]
  ]
}
