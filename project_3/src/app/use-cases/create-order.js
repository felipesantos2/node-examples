export class CreateOrderUseCase {

    execute(data, orderRepository) {
        return orderRepository.create(data);
    }

}
