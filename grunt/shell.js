module.exports = function(grunt){
  grunt.config('shell', {
    newMarkupComponent: {
      command: [
        'cd src/test',
        'cp SKELETON.html ./NEWHTML.html'
      ].join('&&')
    }
  });
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('new-test-html', 'shell:newMarkupComponent');
}