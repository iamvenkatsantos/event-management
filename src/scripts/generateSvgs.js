const fs = require("fs");
const path = require("path");

const svgFileNames = () => {
  const files = fs.readdirSync("src/assets/svgs/")
    .filter((file) => file.endsWith(".svg"))
    .map((file) => {
      const name = path.parse(file).name;
      return { name, file };
    });

  // Remove duplicates by using a Map
  return Array.from(new Map(files.map(file => [file.name, file])).values());
};

const generate = () => {
  const svgNames = svgFileNames();

  const imports = svgNames.map(({ name, file }) =>
    `import { ReactComponent as ${name} } from "./svgs/${file}";`
  ).join("\n");

  const interfaces = svgNames.map(({ name }) =>
    `\t${name}: React.FC<React.SVGProps<SVGSVGElement>> & { src: string };`
  ).join("\n");

  const properties = svgNames.map(({ name, file }) =>
    `\t${name}: Object.assign(${name}, { src: require("./svgs/${file}").default })`
  ).join(",\n");

  const string = `${imports}\n\n` +
    `export interface AppSvgs {\n${interfaces}\n}\n\n` +
    `const svgs: AppSvgs = {\n${properties}\n};\n\n` +
    `export default svgs;`;

  fs.writeFileSync("src/assets/svgs.ts", string, "utf8");
};

generate();