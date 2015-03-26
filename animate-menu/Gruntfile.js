module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        app: 'app',
        dist: 'dist'
    };
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-connect');
     grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        config: config,

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
               files: ['sass/{,*/}*.{scss,sass}'],
               tasks: 'compass:dev'
            },  
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    './sass/**',
                    'index.html',
                    'js/*',
                    'css/*'
                ]
            },
            options: {
                reload: true,
                livereload : true
            }
        },

        // Compiling sass. Different tasks for dist and dev.
        compass: {
            dev: {
                options: {
                   sassDir: 'sass/',
                   cssDir: 'css/',
                },
            },
            dist: {
                options: {
                   sassDir: 'sass/',
                   cssDir: 'css/'
                },
            },
        },

        connect: {
             server: {
                    options:{
                    livereload: true,
                    port: 8000,
                    hostname: '*',
                    base: './'
                    }
            }
        }
    });
  
    grunt.registerTask('serve', [
    'connect',
    'watch'
    ]);

    // grunt.registerTask('test', function (target){
    //     console.log('testing')
    //     if(target !== 'watch'){

    //     }
    //     grunt.task.run([
    //         'watch:sass'
    //     ]);
    //      grunt.task.run(['connect:server']);
    // });
    
    // grunt.registerTask('build',[
    //     'clean:dist',
    //     'compass:dist',
    //     'cssmin',
    //     'copy'
    // ]);
    // grunt.registerTask('default', [
    //     'test',
    //     'build'
    // ]);
};