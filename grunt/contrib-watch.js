module.exports = function(grunt) {
  grunt.config('watch', {
    options: {livereload: true},
    sass: {
      files: ['./src/**/*.scss'],
      tasks: ['compass:dev']
    },//SASS
    html: {
      files: ['*.html']
    }//HTML
  })
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default','watch');
};//Exports