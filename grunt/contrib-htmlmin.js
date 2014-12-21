module.exports = function(grunt) {
  grunt.config('htmlmin', {
    //Configuration needed when we get this far.
    //This task is working.
    site: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: '.',
        src: './site-building/**/*.html',
        dest: './site-distribution/'
      }]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('minify-html', 'htmlmin:site');
}