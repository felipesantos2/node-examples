import Controller from "./Controller";

export default class HomeController extends Controller {
	constructor() { }

	index(request, reply) {
		return reply.send({ name: 'Tá Porra!' });
	}

	create() {
		return 'Olá, mundo!';
	}

	store() {
		return 'Olá, mundo!';
	}

	edit() {
		return 'Olá, mundo!';
	}
}
