const admin = () => {
   return $.gulp
      .src($.path.admin.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.admin.dev));
};
const img = () => {
   return $.gulp
      .src($.path.img.src)
      .on(
         "error",
         $.app.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something",
         })
      )
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.img.dev));
};
const fonts = () => {
   return $.gulp
      .src($.path.fonts.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.fonts.dev));
};
const js = () => {
   return $.gulp
      .src($.path.js.src)
      .on(
         "error",
         $.app.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something",
         })
      )
      .pipe(
         $.compiler({
            mode: "development",
            cache: true,
            devtool: "source-map",
            output: {
               filename: "script.min.js",
            },
            module: {
               rules: [
                  {
                     test: /\.js$/,
                     exclude: "/node_modules/",
                     loader: "babel-loader",
                  },
               ],
            },
         })
      )
      .pipe($.gulp.dest($.path.js.dev));
};
const vendorJs = () => {
   return $.gulp
      .src($.path.vendorJs.src)
      .on(
         "error",
         $.app.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something",
         })
      )
      .pipe(
         $.compiler({
            mode: "production",
            cache: true,
            devtool: "source-map",
            output: {
               filename: "vendor.min.js",
            },
         })
      )
      .pipe($.gulp.dest($.path.vendorJs.dev));
};
const video = () => {
   return $.gulp
      .src($.path.video.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.video.dev));
};
const webp = () => {
   return $.gulp
      .src($.path.webp.src.dev)
      .pipe($.app.size({ title: "Размер до конвертации:" }))
      .pipe($.app.webp())
      .pipe($.app.size({ title: "Размер после конвертации:" }))
      .pipe($.gulp.dest($.path.webp.dev));
};

/* Экспортируем таски в модули */
module.exports = {
   img: img,
   fonts: fonts,
   js: js,
   vendorJs: vendorJs,
   video: video,
   webp: webp,
   admin: admin,
};
