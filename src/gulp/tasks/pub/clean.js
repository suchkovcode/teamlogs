const clean = () => {
   return $.gulp.src("public/*")
      .pipe($.app.clean());
};

/* Экспортируем таски в модули */
module.exports = clean;