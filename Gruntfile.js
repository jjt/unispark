module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    coffee: {
      compile: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.coffee'],
            dest: 'lib',
            ext: '.js'
          }
        ]
      }
    },
    browserify: {
      dist: {
        files: {
          './unispark.js': ['./browserify.js']
        }
      }
    },
    watch: {
      coffee: {
        files: ['src/**/*.coffee'],
        tasks: ['coffee']
      },
      browserify: {
        files: ['lib/**/*.js'],
        tasks: ['browserify']
      }
    }
  });
  
  return grunt.registerTask('default', ['watch']);

}

