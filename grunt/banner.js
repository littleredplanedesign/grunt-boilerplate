module.exports = function(grunt){
  grunt.config('usebanner', {
    annotatePost: {
      options: {
        position: 'top',
        banner: '/*Do NOT modify this files. This file generating using CSSPleeease to include browser specific declarations. You can modify these settings in the pleeease js file.*/',
        linebreak: true
      },
      files: {
        src: './src/css/styles.post.expanded.css'
      }
    }//Annotate Post Task
  });
  grunt.loadNpmTasks('grunt-banner');
  grunt.registerTask('annotate-post-styles', 'usebanner:annotatePost')
}