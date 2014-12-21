module.exports = function(grunt){
  grunt.config('hologram', {
    generate: {
      options: {
        config: 'grunt/module-config/hologram_config.yml'
      }//Options
    }//Generate
  }); //Hologram
  grunt.loadNpmTasks('grunt-hologram');
  grunt.registerTask('build-hologram','hologram:generate');
}