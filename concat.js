const concat = require("concat");
(async function build() {const files = [
        "./dist/hrms-micro-frontend/runtime.js",
        "./dist/hrms-micro-frontend/polyfills.js",
        "./dist/hrms-micro-frontend/main.js"
];
await concat(files, "./dist/hrms-micro-frontend/hrms-module.js")})();