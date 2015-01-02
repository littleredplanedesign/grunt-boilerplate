module.exports = function(grunt) {
   grunt.config('pleeease', {
     //Again, paths may need further configuration.
     //These tasks are working.
     //There are more options to explore as well on this module.
     expandedStyles: {
      options: {
        autoprefixer: {'browsers': ['last 4 versions', 'ios 6']},
        minifier: false
      },
      files: {
        './src/css/styles.post.expanded.css' : './src/css/styles.css'
      }
     },//Expanded Styles for Analysis
     buildWithStyles: {
       options: {
         autoprefixer: {'browsers': ['last 4 versions', 'ios 6']},
         minifier: false
       },
       files: {
         './src/site-building/css/styles.post.expanded.css' : './src/css/styles.css'
       }//Files
     },//Build With Styles for Site Building
     compressedStyles: {
        options: {
          autoprefixer: {'browsers': ['last 4 versions', 'ios 6']},
          minifier: true
        },
        files: {
          './src/site-building/css/styles.post.min.css' : './src/site-building/css/styles.post.expanded.css'
        }//Files
      }//Compressed Styles for site distribution
   });
  grunt.loadNpmTasks('grunt-pleeease');
  grunt.registerTask('observe-fixed-styles','pleeease:expandedStyles');
  grunt.registerTask('use-fixed-styles', 'pleeease:buildWithStyles');
  grunt.registerTask('minify-fixed-styles','pleeease:compressedStyles');
}