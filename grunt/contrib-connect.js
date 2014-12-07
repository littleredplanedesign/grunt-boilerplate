module.exports = function(grunt) {
  grunt.config('connect', {
    devServer: {
      options: {
        port: 8003,
        base: './src',
        open: {
          open: true,
          target: 'http://127.00.0.1:8003'
        }//Open
      }//Options
    },//Dev Server

    siteServer: {
      options: {
        port: 8004,
        base: './site-building',
        open: {
          open: true,
          target: 'http://127.00.0.1:8004'
        }//Open
      }//Options
    }//Site Server
  }); //Config
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('dev-server','connect:devServer');
  grunt.registerTask('site-server','connect:siteServer');
}