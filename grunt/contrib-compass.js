module.exports = function(grunt){
  grunt.config('compass', {
    dev: {
      options: {
        sassDir: './src/sass',
        cssDir: './src/css',
        noLineComments: true
      }//Options
    }//Dev
  })//Config
  grunt.loadNpmTasks('grunt-contrib-compass');
}//Exports