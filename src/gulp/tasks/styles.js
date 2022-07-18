const styles = () => {
   return $.gulp
      .src($.path.css.src)
      .pipe($.app.sourcemaps.init()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
       }))
      .pipe($.sass()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.autoprefixer()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.rename({ extname: ".min.css" }))
      .pipe($.app.sourcemaps.write("map/")).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
       }))
      .pipe($.gulp.dest($.path.css.dev))
      .pipe($.browserSync.stream());
};
module.exports = styles;