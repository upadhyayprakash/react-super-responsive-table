if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/index.prod");
} else {
  module.exports = require("./dist/index.dev");
}
