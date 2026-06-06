class OrderProps {
    orderId;

    amount;

    custumerId;

    constructor(props) {
        const { orderId, amount, custumerId } = props;

        this.orderId = orderId;
        this.amount = amount;
        this.custumerId = custumerId;

    }
}

export class Order extends OrderProps { }
