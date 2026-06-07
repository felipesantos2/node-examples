import { InMemoryOrderDatabase } from '../../tests/in-memory-order-database.js';
import { OrderRepository } from '../repositories/order-repository.js';

export class OrderController {
    store(data, createOrderUseCase) {

        const db = new InMemoryOrderDatabase();
        const orderRepository = new OrderRepository(db);

        const order = createOrderUseCase.execute(
            data,
            orderRepository
        );

        return {
            'data': {
                order
            },
            'message': 'Order Created sucessfully!',
            'status-code': 201,
        };

    }
}
