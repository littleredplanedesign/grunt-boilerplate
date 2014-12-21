module.exports = function(grunt){
  grunt.config('compass', {
    dev: {
      options: {
        sassDir: './src/sass',
        cssDir: './src/css',
        noLineComments: true
      }//Options
    },//Dev

    siteBuild: {
      options: {
        sassDir: './src/sass',
        cssDir: './site-building/styles',
        outputStyle: 'compressed'
      }
    }//Site Build
  })//Config
  grunt.loadNpmTasks('grunt-contrib-compass');
}//Exports