"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const browserSync = require("browser-sync");
const del = require("del");
const uglify = require('gulp-terser-js');

sass.compiler = require("node-sass");

function clean() {
  return del(['dist/**/*'], { force: true })
}

function copyImages() {
  return gulp.src("src/assets/img/*.png").pipe(gulp.dest("dist/img"));
}

function copyFonts() {
  return gulp.src(["src/assets/fonts/*.css"]).pipe(gulp.dest("dist/fonts"))
}

function copyHtml() {
  return gulp
    .src("src/*.html")
    .pipe(gulp.dest("dist/"))
};

function compileScss() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

function compileJs() {
  return gulp
    .src("src/js/main.js")
    .pipe(rollup({ plugins: [
      babel({
        presets: [
          ["@babel/preset-env", {
            modules: false
          }]
        ],
      }),
      resolve(),
      commonjs()]
    }, 'umd'))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
}

gulp.task('start-task', gulp.series([
  clean,
  copyHtml,
  copyImages,
  copyFonts,
  compileScss,
  compileJs,
]));

gulp.task('watch-html', () => {
  return gulp.watch("src/*.html", copyHtml);
});

gulp.task('watch-scss', () => {
  return gulp.watch("src/scss/**/*.scss", compileScss);
});

gulp.task('watch-js', () => {
  return gulp.watch("src/js/**/*.js", compileJs);
});

gulp.task('browser', gulp.series(() => {
  browserSync.create().init({
    watch: true,
    server: {
      baseDir: "./dist"
    },
  });
}));

gulp.task("default", gulp.series(['start-task', gulp.parallel([
  'watch-html',
  'watch-scss',
  'watch-js',
  'browser'
])]));