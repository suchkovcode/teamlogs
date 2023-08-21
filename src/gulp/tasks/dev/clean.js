// @ts-nocheck
const cleanBuild = () => {
   return $.gulp.src("build/*").pipe($.app.clean());
};
const cleanImg = () => {
   return $.gulp.src("build/img/*").pipe($.app.clean());
};
const cleanFonts = () => {
   return $.gulp.src("build/fonts/").pipe($.app.clean());
};
const cleanVideo = () => {
   return $.gulp.src("build/video").pipe($.app.clean());
};
const cleanWebp = () => {
   return $.gulp.src("build/img/webp/").pipe($.app.clean());
};


module.exports = {
   build: cleanBuild,
   img: cleanImg,
   webp: cleanWebp,
   fonts: cleanFonts,
   video: cleanVideo,
};
