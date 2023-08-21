// @ts-nocheck
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
      .pipe($.app.size({ title: "Размер до сжатия:" }))
      // .pipe($.app.imagemin({ verbose: true }))
      .pipe($.app.size({ title: "Размер после сжатия:" }))
      .pipe($.gulp.dest($.path.img.pub));
};
const fonts = () => {
   return $.gulp
      .src($.path.fonts.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.fonts.pub));
};
const video = () => {
   return $.gulp
      .src($.path.video.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.video.pub));
};
const webp = () => {
   return $.gulp
      .src($.path.webp.src.pub)
      .pipe($.app.size({ title: "Размер до конвертации:" }))
      .pipe($.app.webp())
      .pipe($.app.size({ title: "Размер после конвертации:" }))
      .pipe($.gulp.dest($.path.webp.pub));
};
const admin = () => {
   return $.gulp
      .src($.path.admin.src)
      .pipe($.app.size({ title: "Размер файлов:" }))
      .pipe($.gulp.dest($.path.admin.pub));
};

/* Экспортируем таски в модули */
module.exports = {
   img: img,
   fonts: fonts,
   video: video,
   webp: webp,
   admin: admin,
};
