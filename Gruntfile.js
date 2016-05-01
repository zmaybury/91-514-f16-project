/*global module */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            options: {
                browserifyOptions: {
                    plugin: [],
                    debug: true
                },
                transform: ["babelify"],
                watch: true
            },
            dist: {
                files: [{'dist/IWS2-app.min.js': 'src/IWS2-app.js'},{'dist/Demo-page.min.js': 'src/Demo-page.js'}]
            }
        },
        copy: {
            main: {expand: true, flatten: true, cwd: 'src/', src: '**/*.html', dest: 'dist/'},
            css: {expand: true, flatten: true, cwd: 'src/', src: 'css/*.css', dest: 'dist/css'},
            olcss: {expand: true, flatten: true, cwd: 'node_modules/openlayers/css', src: 'ol.css', dest: 'dist/css'},
            fontawesomecss: {expand: true, flatten: true, cwd: 'node_modules/font-awesome/css', src: 'font-awesome.css', dest: 'dist/css/'},
            fontawesomefont: {expand: true, flatten: true, cwd: 'node_modules/font-awesome/fonts', src: '*', dest: 'dist/fonts/'},
            fonts: {expand: true, flatten: true, cwd: 'node_modules/bootstrap', src: 'fonts/*.*', dest: 'dist/fonts/'},
            semantic: {expand: true, cwd: 'src/semantic', src: '**', dest: 'dist/semantic/'},
	        weave: {expand: true, cwd: 'weavejs', src: '**', dest: 'dist/weavejs/'},
            weavesessions: {expand: true, flatten: true, cwd: 'weave_sessions', src: "*", dest: "dist/"}
        },
        clean: {
            dist: ["dist/*.js", "dist/*.css", "dist/*.html"]
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-minifyify');
    grunt.registerTask('default', ['browserify:dist', 'copy']);
    grunt.registerTask('all', ['clean', 'default']);
};
