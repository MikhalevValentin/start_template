"use strict";

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var prefix = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

//server connect
gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    });
});

//scss
gulp.task('css', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(prefix('last 25 versions'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(notify("CSS compile OK!"))
        .pipe(connect.reload());
});

//js
gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('common.min.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(notify("JS compress OK!"))
        .pipe(connect.reload());
});

//html
gulp.task('html', function () {
    gulp.src('app/index.html')
        .pipe(notify("HTML change OK!"))
        .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['css'])
    gulp.watch('js/*.js', ['js'])
    gulp.watch('app/index.html', ['html'])
});

//default
gulp.task('default', ['connect', 'html', 'css', 'js', 'watch']);