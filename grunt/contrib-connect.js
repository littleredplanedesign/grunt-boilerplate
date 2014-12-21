module.exports = function(grunt) {
  grunt.config('connect', {
    devServer: {
      options: {
        port: 8181,
        base: './src',
        livereload: 35729,
        open: {
          open: true,
          target: 'http://127.0.0.1:8181'
        }//Open
      }//Options
    },//Dev Server

    siteServer: {
      options: {
        port: 8282,
        base: './site-building',
        open: {
          open: true,
          target: 'http://127.0.0.1:8282'
        }//Open
      }//Options
    },//Site Server

    styleGuideServer: {
      options: {
        port: 8383,
        base: './src/styleguide',
        livereload: 1337,
        open: {
          open: true,
          target: 'http://127.0.0.1:8383'
        }//Open
      }//Options
    }//Style Guide Server
  }); //Config
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('site-server',['connect:siteServer']);
  grunt.registerTask('dev-server', ['connect:devServer', 'watch']);
  grunt.registerTask('style-guide-server', ['connect:styleGuideServer', 'watch']);
}