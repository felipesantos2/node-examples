import { Order } from '../app/entities/order';

/**
 *  #items <Order>
 */
export class InMemoryOrderDatabase {
    #items = [];

    create(data) {
        const order = new Order(data);

        this.#items.push(order);

        return this.#items;
    }
}
