const styles = () => {
   return (
      $.gulp
         .src($.path.css.src)
         .on(
            "error",
            $.app.notify.onError({
               message: "Error: <%= error.message %>",
               title: "Error running something",
            })
         )
         .pipe($.sass())
         .pipe($.app.autoprefixer())
         .pipe($.app.size({ title: "Размер до сжатия:", showFiles: false }))
         .pipe($.app.shorthand())
         .pipe($.app.groupCssMediaQueries())
         //    .pipe($.app.purgecss({
         //       content: ['./public/*.html', './public/js/script.js'],
         //       fontFace: false,
         //       keyframes: true,
         //       variables: true,
         //   }))
         .pipe($.app.csso({ debug: false }))
         .pipe($.app.size({ title: "Размер после сжатия:", showFiles: false }))
         .pipe($.app.rename({ extname: ".min.css" }))
         .pipe($.gulp.dest($.path.css.pub))
         .pipe($.browserSync.stream())
   );
};
module.exports = styles;
