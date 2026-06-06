import { CreateOrderUseCase } from './app/use-cases/create-order';

import { OrderController } from './app/controllers/order-controller';
import { randomUUID } from 'node:crypto';

const orderController = new OrderController();
const createOrderUseCase = new CreateOrderUseCase();


orderController.store({
    'amount': 3000,
    'customerId': 20,
    'orderId': randomUUID(),
}, createOrderUseCase);
