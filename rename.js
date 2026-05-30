import { readdirSync, writeFile, writeFileSync, renameSync } from 'node:fs'
import { normalize, join } from 'node:path'


const allowParams = [
    '--dry-run',
];

if (process.argv.length > 2) {
    const param = process.argv[2];
    var existParam = allowParams.includes(param);
}

try {
    const fpath = normalize('./files')
    const files = readdirSync(fpath);

    for (const file in files) {
        try {
            const fileName = files[file];
            const newName = newFileName(fileName, '2025', true);

            const oldFullPath = join(fpath, fileName);
            const newFullPath = join(fpath, newName);

            if (!existParam) {
                renameSync(oldFullPath, newFullPath);
            } else {
                preview(oldFullPath, newFullPath);
            }

        } catch (err) {
            console.log(`\x1b[33m \n Deu erro, carai! \n Erro: ${err} \x1b[0m`);
        }
    }

} catch (err) {
    console.log(`\x1b[33m Deu erro, carai! \n ${err} \x1b[0m`);
}

function newFileName(fileName, suffixOrPrefix, isSuffix = true) {
    const [name, extension] = fileName.split('.');
    const end = '.' + extension;

    return isSuffix ?
        `${name + '_' + suffixOrPrefix + end}` :
        `${suffixOrPrefix + '_' + name + end} `;
}

function preview(oldName, newName) {
    console.log(`\x1b[33m ${oldName} -> ${newName} \x1b[0m`);
}

