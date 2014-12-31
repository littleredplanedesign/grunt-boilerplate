module.exports = function(grunt) {
  grunt.config('copy', {
    processLinkCss: {
      files: [
        {
          nonull: true,
          expand: true,
          cwd: './src/html',
          src: '**/*.html',
          dest:'./site-distribution',
          options: {
            process: function (content, srcpath){
              return content.replace("H","hh");
            }
          }
        }
      ]
    },//Distribute HTML
    distributeCSS: {
      files: [
        {
          expand: true,
          cwd: './site-building',
          src: '**/*.css',
          dest: './site-distribution'
        }
      ]
    }//Distribute CSS
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.registerTask('distribute-html', 'copy:processLinkCss');
  //grunt.registerTask('distribute-css', 'copy:distributeCSS');
}