var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    sass = require('gulp-sass');

gulp.task('build', function () {

    gulp.src(['_src/*.scss'])
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('_bin'));

    gulp.src(['_src/fonts/**/*'])
        .pipe(gulp.dest('_bin/fonts'));

    gulp.src(['_src/images/**/*'])
        .pipe(gulp.dest('_bin/images'));
});

gulp.task('watch', function () {
    gulp.watch(['_src/*.scss', '_src/**/*.scss'], ['build']);
});

gulp.task('default', ['build', 'watch']);
