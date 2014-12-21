module.exports = function(grunt) {
  grunt.config('watch', {
      options: {
        livereload: true
      },
      sass: {
        files: ['./src/**/*.scss'],
        tasks: ['compass:dev']
      },//SASS
      html: {
        files: ['./src/**/*.html']
      }//HTML
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['dev-server','watch']);
};//Exports