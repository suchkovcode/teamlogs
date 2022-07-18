const img = () => {
   return $.gulp
      .src($.path.img.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.img.dev));
}
const fonts = () => {
   return $.gulp.src($.path.fonts.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.fonts.dev));
};
const js = () => {
   return $.gulp
      .src($.path.js.src)
      .pipe($.app.concat("script.js"))
      .pipe($.app.size({ title: "Размер файла:" }))
      .pipe($.gulp.dest($.path.js.dev));
};
const vendorCSS = () => {
   return $.gulp.src($.path.vendorCSS.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.css"))
      .pipe($.app.rename({ extname: ".min.css" }))
      .pipe($.gulp.dest($.path.vendorCSS.dev));
};
const vendorJs = () => {
   return $.gulp.src($.path.vendorJs.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.js"))
      .pipe($.gulp.dest($.path.vendorJs.dev));
};
const video = () => {
   return $.gulp.src($.path.video.src)
   .pipe($.app.size({ title: "Размер файлов:" }))
   .pipe($.gulp.dest($.path.video.dev));
};
const webp = () => {
   return $.gulp.src($.path.webp.src.dev)
      .pipe($.app.size({ title: "Размер до конвертации:" }))
      .pipe($.app.webp())
      .pipe($.app.size({ title: "Размер после конвертации:" }))
      .pipe($.gulp.dest($.path.webp.dev));
};
const admin = () => {
   return $.gulp.src($.path.admin.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.admin.dev));
};
const other = () => {
   return $.gulp.src($.path.other.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.other.dev));
};
const favicon = () => {
   return $.gulp.src($.path.favicon.src)
   .pipe($.app.favicons({
         appName: "My App",
         appShortName: "App",
         appDescription: "This is my application",
         developerName: "Hayden Bleasel",
         developerURL: "http://haydenbleasel.com/",
         background: "#fff",
         path: "/img/favicon/",
         url: "http://haydenbleasel.com/",
         display: "standalone",
         orientation: "portrait",
         scope: "/",
         start_url: "/",
         version: 1.0,
         logging: false,
         html: "index.html",
         pipeHTML: true,
         replace: true,
      })
   )
   .pipe($.app.size({ title: "Размер файла:" }))
   .pipe($.gulp.dest($.path.favicon.dev));
};

/* Экспортируем таски в модули */
module.exports = {
   img: img,
   fonts: fonts,
   js: js,
   vendorCSS: vendorCSS,
   vendorJs: vendorJs,
   video: video,
   webp: webp,
   admin: admin,
   other: other,
   favicon: favicon,
};