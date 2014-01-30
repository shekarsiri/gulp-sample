var gulp            = require('gulp'),
    minify          = require('gulp-minify-css'),
    less            = require('gulp-less'),
    notify          = require('gulp-notify')
    prefix          = require('gulp-autoprefixer');

gulp.task('styles', function(){
    gulp.src('./less/*.less')
    .pipe(less())
    .pipe(minify())
    .pipe(prefix('last 15 version'))
    .pipe(gulp.dest('./css'))
    .pipe(notify({message:"All DONE SIR!"}));
});

gulp.task('default', function(){
    gulp.run('styles');

    gulp.watch('./less/**/*.less', function(){
        gulp.run('styles');
    });
})
