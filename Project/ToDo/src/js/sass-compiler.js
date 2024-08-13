const sass = require('sass');

const result = sass.compile("../scss/main.scss");
console.log(result.css);