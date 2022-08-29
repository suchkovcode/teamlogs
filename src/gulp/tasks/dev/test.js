const eslint = () => {
   return $.gulp.src("./build/js/script.min.js")
   .pipe($.app.eslint())
   .pipe($.app.eslint.format())
   .pipe($.app.eslint.failOnError())
};

module.exports = eslint;