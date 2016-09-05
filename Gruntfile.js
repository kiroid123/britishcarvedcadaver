
module.exports = function(grunt) {
    
    grunt.initConfig({
        
        sass: {
            dist: {
            files:{'css/main.css': 'sass/main.scss'}
            }
        },
        
        concat: {
            js: {
            src: ['js/bootstrap.min.js', 'js/jquery.easing.js', 'js/nav.js', 'js/scrolling-nav.js'],
            dest: 'dist/js/scripts.js',
            },
            css: {
            src: ['css/main.css', 'css/bootstrap.min.css'],
            dest: 'dist/css/main.min.css',
            },
        },
        
        cssmin: {
            target: {
                files: [{
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css',
                ext: '.min.css'
                }]
            }
        },
   
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css'],
            },
        },
});
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    
};