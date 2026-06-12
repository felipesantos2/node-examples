import express from 'express';

const port = 3000;
const hostname = 'localhost';
const app = express();

var pdf = 'https://www.novocruzeiro.mg.gov.br/publicos/decreto_067-2026_regulamenta_no_municipio_de_novo_cruzeiro_a_10104859.pdf';

// middleware function
function logger(req, res, next) {
    console.log(req.params);
    next();
};

app.use(logger)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public path
app.use(express.static('public'));

// request x response
app.get('/download', (request, response) => {
    response.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
                <title>Node JS Streams</title>
            </head>
            <body>
                <div class="p-5 flex gap-5 flex-col">
                    <h1 class="text-3xl font-bold underline">
                        Hello world!
                    </h1>

                    <a href="${pdf}" >Baixar PDF</a>        
                </div>
            </body>
        </html>

        `);
});

// res.status(200).json({ status: 'OK', message: 'Server is running' });
app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
});