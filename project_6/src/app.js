import express from 'express';
import { readFile } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';


const app = express();


// middlawares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

let FILES_DIR = path.join('./', 'files');


app.get('/download-pdf', async (req, res) => {
    // todo: download this pdf
    let pdfUrl = 'https://www.novocruzeiro.mg.gov.br/publicos/decreto_067-2026_regulamenta_no_municipio_de_novo_cruzeiro_a_10104859.pdf';

    let pdf = await readFile(pdfUrl);
    console.log(pdf);
    res.download(pdfUrl, (status) => {
        console.log(status)
    })
});

app.get('/download', (req, res) => {
    res.send(`
        <a href="https://www.novocruzeiro.mg.gov.br/publicos/decreto_067-2026_regulamenta_no_municipio_de_novo_cruzeiro_a_10104859.pdf">Baixar PDF</a>
        <br>
        <a href="/download/teste.txt">Baixar TXT</a>
    `);
});


app.get('/download/:file', (req, res, next) => {
    let file = req.params.file;
    console.log(FILES_DIR);
    if (file) {
        res.download(file, { root: FILES_DIR }, (status) => {
            if (!status) return;
        })
    }
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

export default app;
