module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'style.css': 'css/source/style.scss'
				}
			}
		}

	});

	// Load the plugins
	grunt.loadNpmTasks( 'grunt-contrib-sass' );

	// Tasks
	grunt.registerTask( 'default', ['sass'] );
}