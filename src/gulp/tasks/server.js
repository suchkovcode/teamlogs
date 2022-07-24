const server = () => {
   $.browserSync.init({server: "./build", port: 5500, notify: false, watch: true, logLevel: "info", online: true, open: "external", reloadDebounce: 1000, codeSync: true });
   $.gulp.watch($.path.html.watch,       $.task.html);
   $.gulp.watch($.path.html.src.comp,    $.task.html);
   $.gulp.watch($.path.css.watch,        $.task.styles);
   $.gulp.watch($.path.js.watch,         $.gulp.series($.task.clean.js, $.task.transfer.js));
   $.gulp.watch($.path.img.watch,        $.gulp.series($.task.clean.img, $.task.transfer.img));
   $.gulp.watch($.path.webp.watch,       $.gulp.series($.task.clean.webp, $.task.transfer.webp));
   $.gulp.watch($.path.fonts.watch,      $.gulp.series($.task.clean.fonts, $.task.transfer.fonts));
   $.gulp.watch($.path.video.watch,      $.gulp.series($.task.clean.video, $.task.transfer.video));
   $.gulp.watch("./src/libs/**/*",       $.gulp.series($.task.clean.vendor, $.task.transfer.vendorJs, $.task.transfer.vendorCSS));
};

module.exports = server;