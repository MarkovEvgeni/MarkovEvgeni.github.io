(function () {
    'use strict';
}());

const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const rigger = require('gulp-rigger');

gulp.task('csswork', function () {
    'use strict';
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("style.min.css"))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function () {
    'use strict';
    gulp.watch('src/scss/**/*.scss', ['csswork']);
});

gulp.task('jswork', function () {
    'use strict';
    return gulp.src('src/js/**/script.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat("script.main.min.js"))
//        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('js:watch', function () {
    'use strict';
    gulp.watch('src/js/**/*.js', ['jswork']);
});

//gulp.task('default', gulp.parallel('csswork', 'jswork')); ---- Не работет, возможно из-за версии Gulp.
