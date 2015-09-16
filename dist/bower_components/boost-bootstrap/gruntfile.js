module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "dist/boost-bootstrap.css": "less/boost-bootstrap.less"
        }
      },
      production: {
        options: {
          paths: ["less"],
          cleancss: true
        },
        files: {
          "dist/boost-bootstrap.min.css": "less/boost-bootstrap.less"
        }
      }
    },

    watch: {
      files: ['less/**/*.less'],
      tasks: ['less:development']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('production', [
    'less:production'
  ]);

};