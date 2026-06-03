import * as fs from 'node:fs/promises';
import * as path from 'node:path';

try {
    async function promessa1() {
        return await fs.readFile('dump1.txt');
    }

    async function promessa2() {
        return await fs.readFile('dump2.txt');
    }

    const results = await Promise.allSettled([promessa1(), promessa2()]);

    results.forEach((resultado, index) => {
        if (resultado.status === 'fulfilled') {
            console.log(`Arquivo ${index + 1} lido:`, resultado.value.length, 'bytes');
        } else {
            console.error(`Erro no arquivo ${index + 1}:`, resultado.reason.message);
        }
    });

    console.log(results);
} catch (err) {
    console.log("err")
}
