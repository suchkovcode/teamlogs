// @ts-nocheck
const server = () => {
   $.browserSync.init({ server: "./public", port: 3000, notify: false });
};
module.exports = server;
