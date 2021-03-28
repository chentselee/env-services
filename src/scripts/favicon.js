const fs = require("fs");
const path = require("path");

const servicePath = path.resolve("./dist", process.env.SERVICE);

const favicons = fs
  .readdirSync(servicePath)
  .filter(
    (file) =>
      (file.startsWith("apple") ||
        file.startsWith("android") ||
        file.startsWith("favicon")) &&
      (file.split(".")[1] === "png" || file.split(".")[1] === "ico")
  );

favicons.forEach((file) => {
  fs.renameSync(
    path.resolve(servicePath, file),
    path.resolve(servicePath, "assets", file)
  );
});
