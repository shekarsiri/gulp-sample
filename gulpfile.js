var gulp        = require('gulp'),
    minify      = require('gulp-minify-css'),
    less        = require('gulp-less'),
    notify      = require('gulp-notify');

gulp.task('styles', function(){
    gulp.src('./less/*.less')
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('./css'))
    .pipe(notify({message:"All DONE SIR!"}));
});

gulp.task('default', function(){
    gulp.run('styles');

    gulp.watch('./less/**/*.less', function(){
        gulp.run('less');
    });
})
