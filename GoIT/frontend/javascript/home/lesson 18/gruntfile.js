module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.js'
            },
            css: {
                options: {
                    separator: ''
                },
                src: ['css/src/*.css'],
                dest: 'css/style.css'
            }
        },
        uglify: {
            js: {
                src: 'js/dist/script.main.js',
                dest: 'js/dist/script.main.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: 'css/style.css',
                    dest: 'css/style.min.css'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    
};