module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
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
          'scss',
          'yaml'
        ],
        plugins: ['autolinker'],
        theme: 'solarizedlight',
        css: true
      }
    ]
  ]
}
