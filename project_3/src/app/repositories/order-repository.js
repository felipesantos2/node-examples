export class OrderRepository {
    #db;

    constructor(db) {
        this.#db = db;
    }

    create(data) {
        return this.#db.create(data);
    }
}
