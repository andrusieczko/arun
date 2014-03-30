module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: grunt.file.readJSON('jshint.json'),
    lint: {
      backend: ['./*js', 'routes/*.js', 'app/**/*.js'],
      frontend: ['public/js/**/*.js']
    },
    watch: {
      files: ['<%= lint.backend %>', '<%= lint.frontend %>'],
      tasks: 'default'
    },
    complexity: {
      frontend: {
        src: '<%= lint.frontend %>',
        options: {
          cyclomatic: 5,
          halstead: 14,
          maintainability: 80
        }
      },
      backend: {
        src: '<%= lint.backend %>',
        options: '<%= complexity.frontend.options %>'
      }
    },
    jsbeautifier: {
      files: '<%= watch.files %>',
      options: {
        js: {
          "indentSize": 2,
          "indentChar": " ",
          "indentLevel": 0,
          "indentWithTabs": false,
          "preserveNewlines": true,
          "maxPreserveNewlines": 3,
          "jslintHappy": false,
          "braceStyle": "collapse",
          "keepArrayIndentation": false,
          "keepFunctionIndentation": false,
          "spaceBeforeConditional": true,
          "evalCode": false,
          "indentCase": false,
          "unescapeStrings": false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-complexity');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');

  grunt.registerTask('default', ['jsbeautifier', 'jshint:*', 'complexity']);

};
