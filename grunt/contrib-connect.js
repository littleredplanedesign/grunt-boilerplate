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
    }//Dev Server
  }); //Config
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('dev-server', ['connect:devServer', 'watch']);
}