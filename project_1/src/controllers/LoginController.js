import Controller from "./Controller";

export default class LoginController extends Controller{
	constructor() {}

	index(request, reply) {
		return reply.send({ name: 'Tá Porra!' });
	}
}
