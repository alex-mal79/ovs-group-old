import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения 
import fileInclude from "gulp-file-include";
import rename from "gulp-rename";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";
import browserSync from "browser-sync";


// Экспорт объекта
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    fileInclude: fileInclude,
    rename: rename,
    newer: newer,
    if: ifPlugin,
    browserSync: browserSync
}