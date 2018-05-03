var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');
var minifyJS = require('gulp-minify');
var rename = require('gulp-rename');

gulp.task('scss', function () {
	gulp.src('./src/scss/float-placeholder.scss')
		.pipe(sass({ errLogToConsole: true  }))
		.pipe(prefix())
		.pipe(cleanCSS({
      compatibility: 'ie8',
      format: {
  			breaks: {
  				afterAtRule: true,
  				afterBlockBegins: true,
  				afterBlockEnds: true,
  				afterComment: true,
  				afterProperty: true,
  				afterRuleBegins: true,
  				afterRuleEnds: true,
  				beforeBlockEnds: true,
  				betweenSelectors: true
  			},
  			indentBy: 1,
  			indentWith: 'tab'
      },
      level: 0
    }))
		.pipe(gulp.dest('./build/css'))
		.pipe(notify("styles compiled"));
});

gulp.task('js', function () {
	gulp.src('./src/js/float-placeholder.js')
		.pipe(gulp.dest('./build/js'))
		.pipe(notify("javascript updated"));
});

gulp.task('handle-sources', ['scss', 'js']);

gulp.task('minify-scss', function () {
	gulp.src('./build/css/float-placeholder.css')
		.pipe(cleanCSS({level: 2, inline: ['all']}))
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('./build/css'))
		.pipe(notify("styles minified"));
});

gulp.task('minify-js', function () {
	gulp.src('./build/js/float-placeholder.js')
		.pipe(minifyJS({ext:{min:'.min.js'}}))
		.pipe(gulp.dest('./build/js'))
		.pipe(notify("javascript minified"));
});

gulp.task('minify-sources', ['minify-scss', 'minify-js']);

gulp.task('default', ['handle-sources']);
gulp.task('build', ['handle-sources', 'minify-sources', 'minify-scss', 'minify-js']);