const styles = () => {
   return $.gulp
      .src($.path.css.src)
      .on(
         "error",
         $.app.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something",
         })
      )
      .pipe($.app.sourcemaps.init())
      .pipe($.sass())
      .pipe($.app.autoprefixer())
      .pipe($.app.rename({ extname: ".min.css" }))
      .pipe($.app.sourcemaps.write("map/"))
      .pipe($.gulp.dest($.path.css.dev))
      .pipe($.browserSync.stream());
};
module.exports = styles;
