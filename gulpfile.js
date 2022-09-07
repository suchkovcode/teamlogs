const requireDir = require("require-dir");
global.$ = {
   gulp: require("gulp"),
   sass: require("gulp-sass")(require("sass")),
   app: require("gulp-load-plugins")({ DEBUG: false }),
   path: require("./src/gulp/config/path"),
   task: requireDir("./src/gulp/tasks/", { recurse: true }),
   browserSync: require("browser-sync").create(),
   compiler: require("webpack-stream"),
};

/* Запускает сборку без запуска сервера */
exports.default = $.gulp.series(
   $.task.dev.clean.build,
   $.task.dev.transfer.img,
   $.task.dev.transfer.webp,
   $.task.dev.transfer.video,
   $.task.dev.transfer.fonts,
   $.task.dev.transfer.js,
   $.task.dev.transfer.vendorJs,
   $.task.dev.html,
   $.task.dev.styles,
   $.task.dev.transfer.admin
);

/* Запускает сборку с запуском сервера */
exports.dev = $.gulp.series(
   $.task.dev.clean.build,
   $.task.dev.transfer.img,
   $.task.dev.transfer.webp,
   $.task.dev.transfer.video,
   $.task.dev.transfer.fonts,
   $.task.dev.transfer.js,
   $.task.dev.transfer.vendorJs,
   $.task.dev.html,
   $.task.dev.styles,
   $.task.dev.transfer.admin,
   $.task.dev.server
);

/* Запускает продвкшен сборку */
exports.pub = $.gulp.series(
   $.task.pub.clean,
   $.task.pub.transfer.img,
   $.task.pub.transfer.webp,
   $.task.pub.transfer.video,
   $.task.pub.transfer.fonts,
   $.task.pub.transfer.js,
   $.task.pub.transfer.vendorJs,
   $.task.pub.htmlInclude,
   $.task.pub.html,
   $.task.pub.styles,
   $.task.pub.transfer.admin
);

exports.zip = $.task.pub.zip;
exports.server = $.task.pub.server;
exports.test = $.gulp.series($.task.rev.htmlhint, $.task.rev.eslint);
