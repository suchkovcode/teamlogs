const styles = () => {
   return $.gulp
      .src($.path.css.src)
      .pipe($.sass()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.autoprefixer()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.size({ title: "Размер до сжатия:", showFiles: false}))
      .pipe($.app.shorthand()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.groupCssMediaQueries()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.csso({ debug: false})).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.size({ title: "Размер после сжатия:", showFiles: false}))
      .pipe($.app.rename({ extname: ".min.css" }))
      .pipe($.gulp.dest($.path.css.pub))
      .pipe($.browserSync.stream());
};
module.exports = styles;
