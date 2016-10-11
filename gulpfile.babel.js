import gulp from 'gulp'
import shell from 'gulp-shell'
import run from 'run-sequence'
import rimraf from 'rimraf'
import watch from 'gulp-watch'
import server from 'gulp-live-server'

const paths = {
    src: ['./src/**/*.js'],
    compiled: ['./compiled/**/*.js'],
    destination: './compiled'
}

gulp.task('default', cb => {
    run('server', 'build', 'watch', cb)
})

gulp.task('init', shell.task([
    'babel src --out-dir compiled'
]))

gulp.task('build', cb => {
    run('restart', cb)
})

gulp.task('clean', cb => {
    rimraf(paths.destination, cb)
})

let app

gulp.task('server', () => {
    app = server.new(paths.destination)
})

gulp.task('restart', () => {
    app.start.bind(app)()
})

gulp.task('watch', () => {
    return watch(paths.compiled, () => {
        gulp.start('build')
    })
})

gulp.task('babel', shell.task([
    'babel src --watch --out-dir compiled'
]))

gulp.task('redu', shell.task([
    'babel src/redu.js --watch --out-file redu'
]))