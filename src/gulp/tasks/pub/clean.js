// @ts-nocheck
const clean = () => {
   return $.gulp.src("public/*").pipe($.app.clean());
};

module.exports = clean;
