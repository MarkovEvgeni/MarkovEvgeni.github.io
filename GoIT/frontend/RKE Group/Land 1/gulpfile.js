(function () {
    'use strict';
    
    const gulp = require('gulp'),
          prefixer = require('gulp-autoprefixer'),
          uglify = require('gulp-uglify'),
          sass = require('gulp-sass'),
          sourcemaps = require('gulp-sourcemaps'),
          rigger = require('gulp-rigger'),
          cleanCSS = require('gulp-clean-css'),
          imagemin = require('gulp-imagemin'),
          babel = require('gulp-babel'),
          rimraf = require('rimraf'),
          browserSync = require("browser-sync"),
          reload = browserSync.reload;
    
    var path = {
        build: {
            html: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/'
        },
        src: { 
            html: 'src/*.html',
            js: 'src/js/main.js',
            style: 'src/css/main.scss',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        watch: {
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/css/**/*.scss',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        clean: './build'
    };
    
    var config = {
        server: {
            baseDir: "./build"
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "Frontend_Samurai"
    };
    
    gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
    });
    
    gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
     });
    
    gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
    });
    
    gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
    });
    
    gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
    });
    
    gulp.task('build', [
        'html:build',
        'js:build',
        'style:build',
        'fonts:build',
        'image:build'
    ]);
    
    gulp.task('watch', function(){
        
        'use strict'; 
        
        gulp.watch([path.watch.html], ['html:build']);
        gulp.watch([path.watch.style], ['style:build']);
        gulp.watch([path.watch.js], ['js:build']);
        gulp.watch([path.watch.img], ['image:build']);
        gulp.watch([path.watch.fonts], ['fonts:build']);
        
    });
    
    gulp.task('webserver', function () {
        browserSync(config);
    });
    
    gulp.task('clean', function (cb) {
        rimraf(path.clean, cb);
    });
    
    gulp.task('default', ['build', 'webserver', 'watch']);
    
}());