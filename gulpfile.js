// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp,
    path: path,
    plugins: plugins
}

// Импорт задач
import { files } from "./gulp/tasks/copy.js";
import { cssVendor } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { appJs } from "./gulp/tasks/js.js";
import { mainJs } from "./gulp/tasks/js.js";
import { jsVendor } from "./gulp/tasks/copy.js";
import { json } from "./gulp/tasks/copy.js";
import { images } from "./gulp/tasks/images.js";
import { svgIcons } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах и папках
function watcher(){
    gulp.watch(path.watch.files, files);
    gulp.watch(path.watch.jsVendor, jsVendor);
    gulp.watch(path.watch.json, json);
    gulp.watch(path.watch.cssVendor, cssVendor);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.appJs, appJs);
    gulp.watch(path.watch.appJs, mainJs);
    gulp.watch(path.watch.images, images);
}

export { svgIcons }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(files, jsVendor, json, cssVendor, html, scss, appJs, mainJs, images));

// Построение сценариев выполнение задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Выполнение сценария по умолчанию
gulp.task('default', dev);