const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
const path = require('path');
gulp.task('first', () => {
    gulp.src('./src/css/base.css').pipe(gulp.dest('dist/css')); //copy文件
});

//html 有2个任务 1 抽取公共代码  2压缩html文件
gulp.task('minify', () => {
    return gulp.src('src/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

//css 有2个任务  1.less语法的转换  2.css代码压缩

gulp.task('cssmin', () => {
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
});

//js 2个任务 1.es6代码转es5  2代码压缩
gulp.task('htmlmin', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            //判断当前环境 然后更具当前环境 生成所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//复制文件夹
gulp.task('copy', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'));
});

//构建任务 把多个小任务 连在一起
gulp.task('default', ['minify', 'cssmin', 'htmlmin', 'copy']);