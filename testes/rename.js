import { readdirSync, renameSync } from 'node:fs';
import { normalize, join } from 'node:path';


global.appName = "Rename file helper";


const allowParams = [
    '--dry-run',
    '--prefix',
    '--suffix',
];

if (process.argv.length > 2) {
    global.param = process.argv[2];
    global.existParam = allowParams.includes(param);
}

const fpath = normalize('./files')
const files = readdirSync(fpath);

try {
    switch (global.param) {
        case '--dry-run':
            dryRun(files)
            break;

        case '--prefix':
            prefix(files)
            break;

        case '--suffix':
            suffix(files)
            break;

        default:
            rename(files);
            break;
    }
} catch (err) {
    console.log(`\x1b[33m Deu erro, carai! \n ${err} \x1b[0m`);
}

function newFileName(fileName, suffixOrPrefix, isSuffix = true) {

    const arr = fileName.split('.');
    let name = '';

    arr.forEach((el, index) => {
        if (index != arr.length - 1) {
            name += el;
        }
    });

    const extension = arr[arr.length - 1];
    const end = '.' + extension;

    return isSuffix ?
        `${name + '_' + suffixOrPrefix + end}` :
        `${suffixOrPrefix + '_' + name + end} `;
}

function dryRun(files) {
    for (const file of files) {
        try {
            const newName = newFileName(file, '2025', true);
            console.log(`\x1b[33m ${file} -> ${newName} \x1b[0m`);
        } catch (err) {
            console.log(`\x1b[33m \n Deu erro, carai! \n Erro: ${err} \x1b[0m`);
        }
    }
}

function prefix(files) {
    for (const file of files) {
        try {
            const newName = newFileName(file, '2025', false);
            console.log(`\x1b[33m ${file} -> ${newName} \x1b[0m`);
        } catch (err) {
            console.log(`\x1b[33m \n Deu erro, carai! \n Erro: ${err} \x1b[0m`);
        }
    }
}

function suffix(files) {
    for (const file of files) {
        try {
            const newName = newFileName(file, '2025', true);
            console.log(`\x1b[33m ${file} -> ${newName} \x1b[0m`);
        } catch (err) {
            console.log(`\x1b[33m \n Deu erro, carai! \n Erro: ${err} \x1b[0m`);
        }
    }
}

function rename(files) {
    for (const file of files) {
        try {
            const newName = newFileName(file, '2025', true);

            const oldFullPath = join(fpath, file);
            const newFullPath = join(fpath, newName);

            renameSync(oldFullPath, newFullPath);
        } catch (err) {
            console.log(`\x1b[33m \n Deu erro, carai! \n Erro: ${err} \x1b[0m`);
        }
    }
}
