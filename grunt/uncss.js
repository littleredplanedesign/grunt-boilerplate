module.exports = function(grunt) {
  grunt.config('uncss', {
    uncssStyles: {
      options: {
        ignore: ['h2', 'h3'],
        stylesheets: ['./css/styles.post.min.css'],
        htmlroot : '.'
      },
      files: {
        './src/site-building/css/styles.clean.uncss.css' : ['./src/site-building/*.html']
      }
    }
  });
  grunt.loadNpmTasks('grunt-uncss');
  grunt.registerTask('clean-unused', 'uncss:uncssStyles');
}