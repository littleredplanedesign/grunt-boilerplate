module.exports = function(grunt){
  grunt.config('compass', {
    dev: {
      options: {
        sassDir: './src',
        cssDir: './src/css'
      }//Options
    },//Dev

    siteBuild: {
      options: {
        sassDir: './src',
        cssDir: './site-building/styles',
        outputStyle: 'compressed'
      }
    }//Site Build
  })//Config
  grunt.loadNpmTasks('grunt-contrib-compass');
}//Exports