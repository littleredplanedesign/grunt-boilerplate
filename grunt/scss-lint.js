module.exports = function(grunt){
  grunt.config('scsslint', {
    allfiles: ['./src/**/*.scss'],
    options: {
      config: './grunt/module-config/.scss-lint.yml',
      //Reporter output must go in the same folder as your gruntfile.
      reporterOutput: 'scss-lint-report.xml',
      colorizeOutput: true
    }//options
  })
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.registerTask('de-lint-sass', 'scsslint');
};//Exports