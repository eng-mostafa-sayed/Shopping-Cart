const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("sass", async () => {
  gulp.src("src/components/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"));
});

// to compile any sass change

gulp.task("watch", async function () {
  gulp.watch("src/components/**/*.scss", function () {
    gulp
      .src("src/components/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
  });
});
