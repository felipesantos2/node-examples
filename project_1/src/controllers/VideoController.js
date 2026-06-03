import Controller from "./Controller";

export default class VideoController extends Controller {
    constructor() { }

    index(request, reply) {
        return reply.send({ name: 'Tá Porra!' });
    }
}
