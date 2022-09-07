const eslint = () => {
   return $.gulp
      .src("./src/js/**/*.js")
      .pipe($.app.eslint())
      .pipe($.app.eslint.format())
      .pipe(
         $.app.eslint.results((results) => {
            console.log(`Total Results: ${results.length}`);
            console.log(`Total Warnings: ${results.warningCount}`);
            console.log(`Total Errors: ${results.errorCount}`);
         })
      )
      .pipe($.app.eslint.failAfterError());
};

module.exports = eslint;
