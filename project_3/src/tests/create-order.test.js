import { CreateOrderUseCase } from '../app/use-cases/create-order.js';
import { InMemoryOrderDatabase } from './in-memory-order-database.js';
import { expect, test } from 'vitest';
import { Order } from '../app/entities/order.js';
import { OrderRepository } from '../app/repositories/order-repository.js';

import { randomUUID } from 'node:crypto';

test('create a order', () => {

    const createOrderUseCase = new CreateOrderUseCase();
    const db = new InMemoryOrderDatabase();
    const orderRepository = new OrderRepository(db);

    const orderProps = {
        'amount': 3000,
        'customerId': 20,
        'orderId': randomUUID(),
    };

    const order = createOrderUseCase.execute(orderProps, orderRepository);

    expect(order[0]).toBeInstanceOf(Order);
    expect(order.length).toBe(1);
    expect(order[0].customerId).toEqual(20);

});

test('create a order with premium type', () => {

    const createOrderUseCase = new CreateOrderUseCase();
    const db = new InMemoryOrderDatabase();
    const orderRepository = new OrderRepository(db);

    const orderProps = {
        'amount': 3000,
        'customerId': 10,
        'orderId': randomUUID(),
    };

    const order = createOrderUseCase.execute(orderProps, orderRepository);

    expect(order[0]).toBeInstanceOf(Order);
    expect(order.length).toBe(1);
    expect(order[0].customerId).toEqual(10);
    expect(order[0].type).toEqual('premium');

});

test('create a order with normal type', () => {

    const createOrderUseCase = new CreateOrderUseCase();
    const db = new InMemoryOrderDatabase();
    const orderRepository = new OrderRepository(db);

    const orderProps = {
        'amount': 100,
        'customerId': 10,
        'orderId': randomUUID(),
    };

    const order = createOrderUseCase.execute(orderProps, orderRepository);

    expect(order[0]).toBeInstanceOf(Order);
    expect(order.length).toBe(1);
    expect(order[0].customerId).toEqual(10);
    expect(order[0].type).toEqual('normal');

});
