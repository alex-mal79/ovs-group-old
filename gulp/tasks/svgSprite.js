import svgSprite from "gulp-svg-sprite";

export const svgIcons = () => {
    return app.gulp.src(app.path.src.svgSprite)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SPRITE",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../sprite.svg`
                }
            },
        }))
        .pipe(app.gulp.dest(app.path.build.svgSprite))
}