import fs from 'node:fs';
import path from 'node:path';
import { exit } from 'node:process';

// # Source - https://superuser.com/q/1185033
// # Posted by bcf, modified by community. See post 'Timeline' for change history
// # Retrieved 2026-05-28, License - CC BY-SA 3.0

// /mnt/c/Users/<username>

const pt = path;

const origin = pt.normalize('/home/felipesantos2/projects/');
const dest = pt.normalize('/mnt/c/Users/Felip/Downloads/projects/');

try {
    const items = fs.readdirSync(origin);

    for (const item of items) {
        const sourcePath = pt.join(origin, item);
        const destPath = pt.join(dest, item);

        fs.cpSync(sourcePath, destPath, {
            recursive: true,
            force: true,
        });

        console.log(`arquivo copiado: ${item}`);
    }

    console.log('arquivos copiados!');
} catch (err) {
    console.error(err);
}