class OrderProps {
    orderId;

    amount;

    customerId;

    type = 'normal';

    description = 'Lorem ipsum dolor dorime'

    constructor(props) {
        const { orderId, amount, customerId } = props;

        this.orderId = orderId;
        this.amount = amount;
        this.customerId = customerId;
    }
}

export class Order extends OrderProps {

    #amountLimit = 1000;

    constructor(props) {
        super(props);
        this.#type();
    }

    #type() {
        if (this.amount >= this.#amountLimit) {

            this.type = 'premium';

        }
    }

}
