module.exports = function(grunt) {
  grunt.config('connect', {
    devServer: {
      options: {
        port: 8181,
        base: './src',
        open: {
          open: true,
          target: 'http://127.00.0.1:8181'
        }//Open
      }//Options
    },//Dev Server

    siteServer: {
      options: {
        port: 8282,
        base: './site-building',
        open: {
          open: true,
          target: 'http://127.00.0.1:8282'
        }//Open
      }//Options
    },//Site Server

    styleGuideServer: {
      options: {
        port: 8383,
        base: './src',
        open: {
          open: true,
          target: 'http://127.00.0.1:8383'
        }//Open
      }//Options
    }//Style Guide Server
  }); //Config
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('dev-server','connect:devServer');
  grunt.registerTask('site-server','connect:siteServer');
}