const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

// gulp.task('sass', async function() {
//     gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
// })

//check any scss file inside [components or pages] the compile it to css into css folder
gulp.task("watch", async function () {
  gulp.watch(
    ["src/components/**/*.scss", "src/pages/*.scss"],
    async function () {
      gulp
        .src(["src/components/**/*.scss", "src/pages/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
    }
  );
});
