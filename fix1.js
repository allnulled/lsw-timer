const fs = require("fs");

let contents = fs.readFileSync(__dirname + "/timeformat.js").toString();
contents = contents.replace("\n})(this);", "\n})(typeof window === 'undefined' ? global : window);")
fs.writeFileSync(__dirname + "/timeformat.js", contents, "utf8");
