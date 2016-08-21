(function () {
    'use strict';
}());

const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('csswork', function () {
    'use strict';
    return gulp.src('css/src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat("style.min.css"))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'));
});

gulp.task('jswork', function () {
    'use strict';
    return gulp.src('js/src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat("script.main.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js/'));
});

//gulp.task('default', gulp.parallel('csswork', 'jswork')); ---- Не работет, возможно из-за версии Gulp.
