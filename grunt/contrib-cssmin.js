module.exports = function(grunt){
  grunt.config('cssmin', {
    //This file path will need to be changed for site building.
    //For now, this task is working.
    //Ideally, we should copy the main SASS file over to continue importing for site specific styling.
    //We may not even need this module, if we rely on the post pleeease module to minify.
    //If anything, it would be needed in the site building folder, if we were to consider the framework
    //a library module in the site building folder.
    combine: {
      files: {
        './site-building/css/styles.post.min.css': ['./site-building/css/styles.post.expanded.css']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.registerTask('minify-styles','cssmin:combine');
}