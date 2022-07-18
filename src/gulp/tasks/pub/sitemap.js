const sitemapGen = () => {
   return $.gulp.src($.path.sitemap.src)
      .pipe($.app.sitemap({
            siteUrl: "https://teamlogs.ru/",
            fileName: "sitemap.xml",
            changefreq: "weekly",
            priority: "0.8",
            lastmod: Date.now(),
            newLine: "",
            spacing: "",
            noindex: false,
            images: true,
         })
      ).on("error", $.app.notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error running something"
      }))
      .pipe($.gulp.dest($.path.sitemap.pub));
};
module.exports = sitemapGen;
