const htmlInclude = () => {
   return $.gulp.src($.path.html.src.comp)
      .pipe($.app.include()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.webpHtml()).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
};
module.exports = htmlInclude;
