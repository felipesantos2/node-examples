import { CreateOrderUseCase } from './app/use-cases/create-order.js';

import { OrderController } from './app/controllers/order-controller.js';

import { randomUUID } from 'node:crypto';

import http from 'node:http';

const orderController = new OrderController();
const createOrderUseCase = new CreateOrderUseCase();


const port = 3000;
const hostname = 'localhost';


const app = http.createServer((request, reply) => {
    route(request, reply);
});

app.listen(port, hostname, () => {
    console.log(`Server is running on: https://${hostname}:${port}`);
})


function route(request, reply) {

    const method = request.method;
    const url = request.url;


    if (method == 'GET' && url == '/order') {

        const order = orderController.store({
            'amount': 3000,
            'customerId': 20,
            'orderId': randomUUID(),
        }, createOrderUseCase);


        reply.writeHead(200, { 'Content-Type': 'application/json' });
        reply.end(JSON.stringify(order));
    }

}