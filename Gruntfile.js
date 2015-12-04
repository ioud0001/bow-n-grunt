// Anna's Grunt File
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	// copy the following files into the dist folder (distribution) 
	copy: {
		main : {
        	files: [
            	// Bootstrap CSS file
				{
                	expand: true,
                	cwd   :'bower_components/bootstrap/dist/css/',
                	src   : 'bootstrap.css',
                	dest  : 'dist/css/'
            	},
				// Bootstrap JS file 
				{
					expand: true,
					cwd : 'bower_components/bootstrap/dist/js/',
					src: 'bootstrap.js',
					dest: 'dist/js/'
				},
				// Font Awesome 
				{
					expand: true,
					src: 'bower_components/font-awesome/fonts/**',
					dest: 'dist/fonts/'
				},
				// Font Awesome CSS
				{
					expand: true,
					cwd : 'bower_components/font-awesome/css/',
					src: 'font-awesome.css',
					dest: 'dist/css/'
					//From the bower_components folder, copy the font-awesome/css/font-awesome.css to /dist/css/font-awesome.css
				},
				// jQuery
				{
					expand: true,
					cwd: 'bower_components/jquery/dist/',
					src: 'jquery.js',
					dest: 'dist/js/'
				},
				// my image
				{
					expand: true,
					cwd: 'assets/images/',
					src: 'flower.png',
					dest: 'dist/assets/images/'
				},
				// My CSS file 
				{
					expand: true,
					src: 'css/**',
					dest: 'dist/'
				},
				// My JS file 
				{
					expand: true,
					src: 'js/**',
					dest: 'dist/'
				},
				// My index file
				{
					expand: true,
					src: 'index.html',
					dest: 'dist/'
				}
        	]
    	}
	},
		// Combine /dist/js/jquery.js, /dist/js/main.js, /dist/js/bootstrap.js into /dist/js/main.min.js
		uglify: {
			my_target: {
	
				files: {
					'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js']
				}
    		}
		}, // end uglify task 
		// Task should combine and minimize /dist/css/bootstrap.css, /dist/css/font-awesome.css, and /dist/css/main.css into /dist/css/main.min.css
		cssmin: {
			target: {
				files: {
					'dist/css/main.min.css': ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
				}
		}, 
		},// end css min task 
		clean: {
			js: ["dist/js/*.js", "!dist/js/*.min.js"],
			css: ["dist/css/*.css", "!dist/css/*.min.css"]
	
		}
  });

// Load the plugin that copies files to dist: src: https://github.com/gruntjs/grunt-contrib-copy
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Creates ugly code (nah...it makes downloading of code easier) 
 grunt.loadNpmTasks('grunt-contrib-uglify');
 
  // Minifies the CSS: src: https://github.com/gruntjs/grunt-contrib-cssmin
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 
  // Cleans the code: src: https://github.com/gruntjs/grunt-contrib-clean
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'clean']);

};