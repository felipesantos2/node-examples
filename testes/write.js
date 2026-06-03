
import { readdirSync, writeFile, writeFileSync } from 'node:fs'

try {
    const fullPath = join(filesPath, 'felipe.txt');
    writeFileSync(fullPath, content)
    console.log(`\x1b[33m ${fullPath} \x1b[0m`);
} catch (err) {
    console.log(`\n Deu erro, carai! \n Erro: ${err}`)
}
