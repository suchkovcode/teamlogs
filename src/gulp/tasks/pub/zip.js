const zip = () => {
   return $.gulp.src($.path.zip.src)
      .pipe($.app.size({ title: "Размер до архивации:" }))
      .pipe($.app.zip("public.zip")).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.size({ title: "Размер после архивации:" }))
      .pipe($.gulp.dest($.path.zip.pub));
};
module.exports = zip;
