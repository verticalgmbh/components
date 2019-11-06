// Require fs-extra for copy-function
const fs = require('fs-extra');
var src = "", dest = "";

/* Copy _core-folder to dist */
src = "./projects/vertical-components/src/_core";
dest = "./dist/vertical-components/_core";

fs.copySync(src, dest);
console.log("core folder successfully copied");

/* Delete theming-folder */
fs.removeSync('./dist/vertical-components/_core/theming');
console.log("theming folder successfully removed");


/* Move prebuilt-themes-folder */
/*
src = "./projects/vertical-components/src/_core/theming/prebuilt-themes";
dest = "./dist/vertical-components/prebuilt-themes";

fs.copySync(src, dest);
console.log("prebuilt-themes folder successfully copied");
*/