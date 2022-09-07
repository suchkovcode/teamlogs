const path = {
   admin: {
      src: "./src/admin/**/*",
      dev: "./build/admin/",
      pub: "./public/admin/",
   },
   html: {
      src: {
         page: ["./src/html/page/*.html"],
         comp: "./src/html/components/*.html",
      },
      dev: "./build/",
      pub: "./public/",
      watch: {
         page: "./src/html/page/*.html",
         comp: "./src/html/components/*.html",
      },
   },
   css: {
      src: "./src/scss/**/*.{scss,sass}",
      dev: "./build/css/",
      pub: "./public/css/",
      watch: "./src/scss/**/*.{scss,sass}",
   },
   js: {
      src: "./src/js/script.js",
      dev: "./build/js/",
      pub: "./public/js/",
      watch: ["./src/js/**/*.js", "!./src/js/vendor.js"],
   },
   img: {
      src: "./src/img/**/*",
      dev: "./build/img/",
      pub: "./public/img/",
      watch: "./src/img/**/*",
   },
   webp: {
      src: {
         dev: "./build/img/png/*.png",
         pub: "./public/img/png/*.png",
      },
      dev: "./build/img/webp/",
      pub: "./public/img/webp/",
      watch: "./build/img/png/*.png",
   },
   fonts: {
      src: "./src/fonts/**/*",
      dev: "./build/fonts/",
      pub: "./public/fonts/",
      watch: "./src/fonts/**/*",
   },
   video: {
      src: "./src/video/**/*",
      dev: "./build/video/",
      pub: "./public/video/",
      watch: "./src/video/**/*",
   },
   vendorJs: {
      src: "./src/js/vendor.js",
      dev: "./build/js/",
      pub: "./public/js/",
      watch: "./src/js/vendor.js",
   },
   zip: {
      src: "./public/**/*",
      pub: "./",
   },
};

module.exports = path;
