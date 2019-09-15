const {src, dest, parallel} = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cssimport = require('gulp-cssimport');


function html() {
	return src('src/templates/*.html')
		.pipe(dest'public/')
}

function javascript() {
	return src('src/js/*.js')
		.pipe(babel({
			presets:[ '@babel/env ']
		}))
		.pipe(minifyJS())
		.pipe(rename({extname:'.min.js'}))
		.pipe(dest'public/assest/js/')
}


function css() {
	return src('src/css/*.css')
		.pipe(cssimport())
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(rename({extname:'.min.js'}))
		.pipe(dest'public/assest/css/')
}

exports.default = parallel(javascript, css);