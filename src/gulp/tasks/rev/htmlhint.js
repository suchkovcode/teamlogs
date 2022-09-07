const htmlhint = () => {
   return $.gulp
      .src($.path.html.src.page)
      .pipe($.app.htmlhint(".htmlhintrc"))
      .pipe($.app.htmlhint.reporter())
      .pipe($.app.htmlhint.failOnError());
};

module.exports = htmlhint;
