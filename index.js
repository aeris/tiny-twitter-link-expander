var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["twitter.com", "*.twitter.com"],
  contentScriptFile: "./content-script.js"
});
