module.exports = function(grunt){
  grunt.config('shell', {
    //These are for reference, for now.
    setupStyleguide: {
      command: [
        'cd src',
        'mkdir styleguide',
        'cd styleguide',
        'git clone git://github.com/kaleistyleguide/kaleistyleguide.git',
        'grunt style-guide-server'
      ].join('&&')
    }
  });
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('setupStyleguide', 'shell:setupStyleguide');
}