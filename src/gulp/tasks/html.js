const html = () => {
   return $.gulp
      .src($.path.html.src.page)
      .pipe($.app.include()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
       }))
      .pipe($.gulp.dest($.path.html.dev))
      .pipe($.browserSync.stream());
};

module.exports = html;