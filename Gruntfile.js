module.exports = function(grunt) {

    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      traceur: {
        options: {
          blockBinding: true,
          sourceMaps: true
        },
        dynamic_mappings: {
          files: [
            {
              expand: true,
              cwd: "src/",
              src: ["**/*.js"],
              dest: "app/",
              ext: ".js"
            }
          ],
        },
      },

      nodemon: {
        dev: {
          options: {
            file: 'app/app.js',
            args: ['dev'],
            nodeArgs: ['--debug'],
            ignoredFiles: ['node_modules/**'],
            watchedExtensions: ['js'],
            watchedFolders: ['app'],
            // delayTime: 1,
            legacyWatch: true,
            env: {
              PORT: '8181'
            },
            cwd: __dirname,
          }
        },
      },

      watch: {
        scripts: {
          files: ['src/*.js'],
          tasks: ['traceur'],
          options: {
            spawn: true,
          },
        },
      },

       concurrent: {
        target: {
            tasks: ["nodemon", "watch", "node-inspector", "shell"],
            options: {
                logConcurrentOutput: true
            }
        }
      },

      'node-inspector': {
        custom: {
          options: {
            'web-port': 8080,
            'web-host': 'localhost',
            'debug-port': 5858,
            'save-live-edit': true,
            'stack-trace-limit': 4
          }
        }
      },

      shell: {
        multiple: {
          command: [
              "echo Starting Chrome Debugger...",
              "start http://localhost:8080/debug?port=5858"
          ].join('&&')
        }
      }
  });

  grunt.loadNpmTasks("grunt-node-inspector");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-traceur");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ["traceur", "concurrent"]);
};