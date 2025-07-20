const fs = require("fs");
const path = require("path");

const imageFileNames = () => {
  return fs.readdirSync("src/assets/images/")
    .filter(file => file.endsWith(".jpg") || file.endsWith(".png"))
    .map(file => path.parse(file).name);
};

const generate = () => {
  const imageNames = imageFileNames();

  const imports = imageNames
    .map(name => `import ${name} from "./images/${name}.jpg";`)
    .join("\n");

  const properties = imageNames
    .map(name => `${name},`)
    .join("\n\t");

  const content = `${imports}\n\n` +
    `const images = {\n\t${properties}\n};\n\n` +
    `export default images;`;

  fs.writeFileSync("src/assets/images.ts", content, "utf8");
};

generate();
