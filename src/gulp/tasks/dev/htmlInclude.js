const htmlInclude = () => {
   return $.gulp
      .src($.path.html.src.comp)
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
      .pipe($.browserSync.stream());
};
module.exports = htmlInclude;
