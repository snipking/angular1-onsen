/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');

// Include Plugins
var del = require('del');
var gulpif = require('gulp-if');
var gulpIgnore = require('gulp-ignore');
var jshint = require('gulp-jshint');
var useref = require('gulp-useref');
var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

// Clean Task
gulp.task('clean', function () {
    del(['www/*']);
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('src/css/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Minify CSS
gulp.task('css', function () {
    return gulp.src('src/css/**/*.css')
            .pipe(sourcemaps.init())
            .pipe(gulp.dest('www/css'))  // write source file for debug
            .pipe(nano({reduceIdents: false}))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '.'}))
            .pipe(gulp.dest('www/css'));
});

// Uglify JS
gulp.task('scripts', function () {
    return gulp.src('src/scripts/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(gulp.dest('www/scripts'))  // write source file for debug
            .pipe(uglify({mangle: false}))  // for debug, do not mangle variable name
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '.'}))
            .pipe(gulp.dest('www/scripts'));
});

// copy all files
gulp.task('copy-dev', function () {
    return gulp.src([
        'src/**/*',
        '!src/index.html',
        '!src/scripts/*'])
            .pipe(gulp.dest('www'));
});

// copy product env files, ignore source and useless files
gulp.task('copy-prod', function () {
    return gulp.src([
        'src/**/*',
        '!src/index.html',
        '!src/**/*.ts',
        '!src/**/*.less',
        '!src/**/*.sass',
        '!src/**/*.styl',
        '!src/css/*',
        '!src/**/*.md',
        '!src/scripts/*'])
            .pipe(gulp.dest('www'));
});

// Handle HTML
gulp.task('pagesHtml', function(){
  return gulp.src('src/pages/**/*.html')
    .pipe(useref({noAssets:true}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www/pages'));
});

gulp.task('rootHtml', function(){
  return gulp.src('src/*.html')
    .pipe(useref({noAssets:true}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www'));
});

gulp.task('html', ['rootHtml', 'pagesHtml']);

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['src/**/*'], ["copy-dev"]);
});

gulp.task('build-dev', function (callback) {
    runSequence('copy-dev', ['lint', 'sass', 'css', 'scripts', 'html'], callback);
});

gulp.task('build-prod', function (callback) {
    runSequence('copy-prod', ['lint', 'sass', 'css', 'scripts', 'html'], callback);
});

// Default Task
gulp.task('default', ['run-dev']);

// Default Task
gulp.task('run-dev', function (callback) {
    runSequence('clean', 'build-dev', callback);
});