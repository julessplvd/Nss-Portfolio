module.exports = function(grunt) {
  
  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", "$", "firebase"],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "jules": true }
      },
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/styles.sass'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.sass'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
  };