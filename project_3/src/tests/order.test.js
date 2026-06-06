import { test, expect } from "vitest";
import { Order } from "../app/entities/order";

test('create and order', () => {
    const order = new Order();

    expect(order).toBeInstanceOf(Order)
});