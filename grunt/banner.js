module.exports = function(grunt){
  grunt.config('usebanner', {
    annotatePost: {
      options: {
        position: 'top',
        banner: '/*WARNING: Do NOT modify this file. This file generating using CSSPleeease to include browser specific declarations. You can modify these settings in the pleeease js file.*/'
      },
      files: {
        src: './src/css/styles.post.expanded.css'
      }
    },//Annotate Post Styles
    annotateStandard: {
      options: {
        position: 'top',
        banner: '/*WARNING: Do NOT modify this file. SASS will wipe this file out.*/'
      },
      files: {
        src: './src/css/styles.css'
      }
    }//Annotate Standard Styles
  });
  grunt.loadNpmTasks('grunt-banner');
  grunt.registerTask('annotate-post-styles', 'usebanner:annotatePost');
  grunt.registerTask('annotate-standard-styles', 'usebanner:annotateStandard');
}