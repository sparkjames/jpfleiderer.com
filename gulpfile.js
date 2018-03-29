// npm install gulp -g --save-dev
// npm install gulp-imagemin --save-dev
// npm install gulp-concat --save-dev
// npm install gulp-autoprefixer --save-dev
// npm install gulp-minify-css --save-dev
// npm install gulp-uglify --save-dev
// npm install gulp-rename --save-dev
// npm install gulp-notify --save-dev
// npm install gulp-ruby-sass --save-dev
// npm install gulp-watch --save-dev
// npm install gulp-sourcemaps --save-dev
// npm install gulp-newer --save-dev



// Config for theme
var themePath = '';

// Gulp Nodes
var gulp = require( 'gulp' ),
	watch = require( 'gulp-watch' ),
	minifyCSS = require('gulp-minify-css'),
	uglify = require( 'gulp-uglify' ),
	rename = require( 'gulp-rename' ),
	notify = require( 'gulp-notify' ),
	sass = require( 'gulp-ruby-sass' ),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	sourcemaps = require('gulp-sourcemaps'),
	newer = require('gulp-newer');

// Error Handling
var onError = function( err ) {
	console.log( 'An error occurred:', err.message );
	this.emit( 'end' );
};

gulp.task('scss', function () {
	return sass(themePath + 'style.scss', { sourcemap: false })
		.on('error', sass.logError)
		.pipe(autoprefixer(['last 4 versions', 'iOS 7']))
		.pipe(minifyCSS({keepBreaks:false}))
		.pipe(gulp.dest(themePath))
		.pipe(notify({ message: 'Scss task complete' }));
});


gulp.task('scripts', function() {
	return gulp.src( [themePath + 'js/development/before-libs/*.js', themePath + 'js/development/libs/**/*.js', themePath + 'js/development/after-libs/*.js', themePath + 'modules/*/js/*.js'] )
		.pipe(concat('js/scripts.js'))
		.pipe(gulp.dest(themePath))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(themePath))
		.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
	return gulp.src(themePath + 'images/uncompressed/*')
		.pipe(newer(themePath + 'images'))
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest(themePath + 'images'))
		.pipe(notify({ message: 'Images task complete' }));
});

// Watch task -- this runs on every save.
gulp.task( 'watch', function() {

	// Watch all .scss files
	gulp.watch( themePath + '**/**/*.scss', [ 'scss' ] );

	// Watch js files
	gulp.watch( themePath + 'js/development/**/*.js', [ 'scripts' ] );

	// Watch img Files
	gulp.watch( themePath + 'images/uncompressed/**', [ 'images' ] );

});


// Default task -- runs scss and watch functions
gulp.task( 'default', ['images', 'scss', 'scripts', 'watch'], function() {
});
