module.exports = function(grunt){
  grunt.config('compass', {
    dev: {
      options: {
        sassDir: './src',
        cssDir: './src/css'
      }//Options
    }//Dev
  })//Config
  grunt.loadNpmTasks('grunt-contrib-compass');
}//Exports