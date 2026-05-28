import * as fs from 'node:fs'
import { exit } from 'node:process';
import path from 'node:path';

const pt = path.posix;

// try {
//     await fs.cpSync('./um', './dois', {
//         force: true,
//         recursive: true,
//     });
//     console.log('source.txt was copied to destination.txt');
// } catch (err) {
//     console.error(`error: ${err}`);
// }

try {
    const origin = pt.normalize('/home/felipesantos2/projects/obras/obras3')
    const dest = pt.normalize('/home/felipesantos2/projects/node/dois')

    /**
     * return <array, string>
     */
    const filePaths = fs.readdirSync(origin, {
        recursive: true,
    });

    if (!filePaths.length) {
        console.log('Não temos arquivos!');
        exit()
    }
    filePaths.forEach(file => {

        console.log(file)
        try {
            let path = origin + "/" + file;

            console.log(path)
            fs.cpSync(path, dest, {
                force: true,
                recursive: true,
                mode: 1,
                force: true,
            });
        } catch (err) {
            exit(err)
        }
    });


} catch (err) {
    console.error(`error: ${err}`);
}
