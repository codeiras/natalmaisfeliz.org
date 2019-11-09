const gulpConfig = {
  dev: {
    root: './dev',
    styles: './dev/assets/styles',
    scripts: './dev/assets/scripts',
    templates: {
      root: './dev/templates',
      options: {
        path: path.resolve(__dirname, './dev/templates')
      }
    }
  },

  public: {
    root: './public',
    styles: './public/assets/styles',
    scripts: './public/assets/scripts',
    templates: './public'
  }

  connect: {
    name: 'Natal Mais Feliz',
    root: '.',
    host: 'localhost',
    port: 2512,
    livereload: true
  }
};

export default gulpConfig;
