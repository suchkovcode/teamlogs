const img = () => {
   return $.gulp
      .src($.path.img.src)
      .pipe($.app.size({ title: "Размер до сжатия:" }))
      .pipe($.app.imagemin({ verbose: true })).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.app.size({ title: "Размер после сжатия:" }))
      .pipe($.gulp.dest($.path.img.pub));
}
const fonts = () => {
   return $.gulp.src($.path.fonts.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.fonts.pub));
};
const js = () => {
   return $.gulp
      .src($.path.js.src)
      .pipe($.app.size({ title: "Размер до оптимизации:" }))
      .pipe($.app.concat("script.js"))
      .pipe($.app.size({ title: "Размер после оптимизации:" }))
      .pipe($.gulp.dest($.path.js.pub));
};
const vendorCSS = () => {
   return $.gulp.src($.path.vendorCSS.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.css"))
      .pipe($.app.csso({ debug: false}))
      .pipe($.app.rename({ extname: ".min.css" }))
      .pipe($.gulp.dest($.path.vendorCSS.pub));
};
const vendorJs = () => {
   return $.gulp.src($.path.vendorJs.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.app.concat("vendor.js"))
      .pipe($.gulp.dest($.path.vendorJs.pub));
};
const video = () => {
   return $.gulp.src($.path.video.src)
   .pipe($.app.size({ title: "Размер файлов:" }))
   .pipe($.gulp.dest($.path.video.pub));
};
const webp = () => {
   return $.gulp.src($.path.webp.src.pub)
      .pipe($.app.size({ title: "Размер до конвертации:" }))
      .pipe($.app.webp())
      .pipe($.app.size({ title: "Размер после конвертации:" }))
      .pipe($.gulp.dest($.path.webp.pub));
};
const admin = () => {
   return $.gulp.src($.path.admin.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.admin.pub));
};
const other = () => {
   return $.gulp.src($.path.other.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.other.pub));
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
   .pipe($.gulp.dest($.path.favicon.pub));
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

// Добавить сжатие js