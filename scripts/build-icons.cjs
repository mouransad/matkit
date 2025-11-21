const { transform } = require("@svgr/core");
const { readdirSync, readFileSync, writeFileSync, mkdir, mkdirSync } = require("fs");
const path = require("path");

const SRC_DIR = path.resolve(__dirname, '../src/assets/icons');
const OUT_DIR = path.resolve(__dirname, '../src/lib/icons');

const getEntries = () => {
    const srcDirContents = readdirSync(SRC_DIR);

    return srcDirContents
        .filter((fileName) => fileName.endsWith('.svg'))
        .map((fileName) => {
            return {
                fileName,
                baseName: path.basename(fileName, '.svg'),
            }
        });
}

const makeSvg = async (svgCode, entry) => {
    const jsCode = await transform(
        svgCode,
        {
            typescript: true,
            icon: true,
            plugins: ["@svgr/plugin-jsx"],
            jsxRuntime: 'automatic',
            prettier: true,
        },
        {
            componentName: entry.baseName
        },
    );

    mkdirSync(OUT_DIR, { recursive: true });

    writeFileSync(path.resolve(OUT_DIR, `${entry.baseName}.tsx`), jsCode, 'utf8');
}

const buildSvgs = (entries) => {
    for (let entry of entries) {
        const svgCode = readFileSync(path.resolve(SRC_DIR, entry.fileName), 'utf-8');

        makeSvg(svgCode, entry);
    }
};

const main = () => {
    const entries = getEntries();
    buildSvgs(entries);
};

main();