module.exports = function(grunt) {
   grunt.config('pleeease', {
     //Again, paths may need further configuration.
     //These tasks are working.
     expandedStyles: {
      options: {
        autoprefixer: {'browsers': ['last 4 versions', 'ios 6']},
        minifier: false
      },
      files: {
        './src/css/styles.expanded.css' : './src/css/styles.css'
      }
    },

     compressedStyles: {
        options: {
          autoprefixer: {'browsers': ['last 4 versions', 'ios 6']},
          minifier: false
        },
        files: {
          './site-distribution/css/styles.fixed.min.css' : './site-building/css/styles.min.css'
        }
      }
   });
  grunt.loadNpmTasks('grunt-pleeease');
  grunt.registerTask('expand-browser-styles','pleeease:expandedStyles');
  grunt.registerTask('minify-browser-styles','pleeease:compressedStyles');
}