import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder;
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        scss: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgSprite: `${srcFolder}/img/sprite/*.svg`,
        appJs: `${srcFolder}/js/app.js`,
        mainJs: `${srcFolder}/js/main.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        jsVendor: `${srcFolder}/js/vendor/**/*.js`,
        json: `${srcFolder}/js/json/**/*.js`,
        cssVendor: `${srcFolder}/css/**/*.css`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        cssVendor: `${srcFolder}/css/**/*.css`,
        appJs: `${srcFolder}/js/**/*.js`,
        mainJs: `${srcFolder}/js/main.js`,
        jsVendor: `${srcFolder}/js/vendor/**/*.js`,
        json: `${srcFolder}/js/json/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `host1838542.hostland.pro/htdocs/www`
}