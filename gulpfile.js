const {src, dest} = require('gulp');

const emailBuilder = require('gulp-email-builder');
const options = {
  encodeSpecialChars: false
}

function build() {
  return src(['./src/*.html'])
    .pipe(emailBuilder(options).build())
    .pipe(dest('./dist/'));
}

exports.build = build;
