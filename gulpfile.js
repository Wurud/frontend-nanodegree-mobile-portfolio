var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-csso');


gulp.task('default',['scripts', 'images', 'minify', 'css', 'viewScript', 'viewImage', 'viewHtml', 'viewCss'] ,function() {
  console.log('Done!');

})

gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(concat('perfmatters.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('images', function() {
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});

gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('viewScript', function() {
  gulp.src('views/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/views/js'))
});

gulp.task('viewCss', function() {
  gulp.src('views/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/views/css'))
});

gulp.task('viewImage', function() {
  gulp.src('views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/views/images'))
});

gulp.task('viewHtml', function() {
  return gulp.src('views/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/views'));
});
