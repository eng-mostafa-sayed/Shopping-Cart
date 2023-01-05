//top level functions [task, src, dest, watch];
const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

//task => do something or some task it takes 2 parameters: task name and callback function
gulp.task("log", async function () {
  console.log("logging");
});

//src => do something or some task for/on a file in specific location it takes 2 parameters:task name and callback function
//pipe => copy
gulp.task("copy", async function () {
  gulp.src("models/*.css").pipe(gulp.dest("schema"));
});
//watch => it keep watching for any changes made
gulp.task("watching", async function () {
  await gulp.watch("models/lol.css", async function () {
    gulp.src("models/lol.css").pipe(gulp.dest("schema"));
  });
});
//////////////////////////////////////////////////////////////////////////////////////
//training to convert scss to css then put it to css file
gulp.task("sass", async function () {
  gulp.src("index.scss").pipe(sass()).pipe(gulp.dest("css"));
});
