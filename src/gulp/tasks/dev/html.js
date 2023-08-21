// @ts-nocheck
const html = () => {
   return $.gulp
      .src($.path.html.src.page)
      .on(
         "error",
         $.app.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something",
         })
      )
      .pipe(
         $.app.fileInclude({
            prefix: "@",
            basepath: "./src/",
         })
      )
      .pipe($.gulp.dest($.path.html.dev))
      .pipe($.browserSync.stream());
};

module.exports = html;
