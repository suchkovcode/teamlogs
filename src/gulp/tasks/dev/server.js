const server = () => {
   $.browserSync.init({
      server: "./build",
      port: 5500,
      notify: false,
      watch: true,
      online: true,
      open: "local",
      reloadDebounce: 2000,
      codeSync: true,
      https: false,
      ghostMode: false,
   });

   $.gulp.watch($.path.html.watch.page, $.task.dev.html);
   $.gulp.watch($.path.html.watch.comp, $.task.dev.html);
   $.gulp.watch($.path.html.watch.comp, $.task.dev.htmlInclude);
   $.gulp.watch($.path.css.watch, $.task.dev.styles);
   $.gulp.watch(
      $.path.img.watch,
      $.gulp.series($.task.dev.clean.img, $.task.dev.transfer.img, $.task.dev.transfer.webp)
   );
   $.gulp.watch($.path.fonts.watch, $.gulp.series($.task.dev.clean.fonts, $.task.dev.transfer.fonts));
   $.gulp.watch($.path.video.watch, $.gulp.series($.task.dev.clean.video, $.task.dev.transfer.video));
   $.gulp.watch($.path.js.watch, $.task.dev.transfer.js);
   $.gulp.watch($.path.vendorJs.watch, $.task.dev.transfer.vendorJs);
   $.gulp.watch("./src/data/*.json", $.gulp.series($.task.dev.html, $.task.dev.htmlInclude));
};

module.exports = server;
