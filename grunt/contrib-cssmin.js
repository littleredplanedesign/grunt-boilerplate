module.exports = function(grunt){
  grunt.config('cssmin', {
    //This file path will need to be changed for site building.
    //For now, this task is working.
    //Ideally, we should copy the main SASS file over to continue importing for site specific styling.
    combine: {
      files: {
        './site-building/css/styles.min.css': ['./src/css/styles.css']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('minify-styles','cssmin:combine');
}