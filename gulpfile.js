var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function(){
  gulp.src('scripts/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('scripts/*.js', function(){
    gulp.run('default');
  })
})
