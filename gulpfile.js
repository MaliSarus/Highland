const
    gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require("browser-sync").create(),
    del           = require('del'),
    cache         = require('gulp-cache'),
    autoPrefixer  = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries');

function gulpSass() {
    return gulp
        .src('./src/assets/scss/**/*.scss')
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(autoPrefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(browserSync.stream());
}

function startServer(done) {
    browserSync.init({
        proxy: "highland"
    });
    done();
}

function clean() {
    return del(["dist"]);
}

function clear() {
    return cache.clearAll();
}

function reload(done) {
    browserSync.reload();
    done();
}

function watchFiles(done) {
    gulp.watch('./src/assets/scss/**/*.scss', gulp.parallel(gulpSass));
    gulp.watch('./src/assets/css/**/*.css', gulp.parallel(reload));
    gulp.watch("./src/**/*.html", gulp.parallel(reload));
    gulp.watch("./src/**/*.php", gulp.parallel(reload));
    gulp.watch('./src/assets/js/**/script.js', gulp.parallel(reload));
    done();
}

gulp.task('default',gulp.parallel(watchFiles, startServer));

exports.clean = clean;
exports.clear = clear;