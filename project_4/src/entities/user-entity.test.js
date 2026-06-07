import { describe, expect, it } from "vitest";
import { User } from "./user-entity.js";

describe('user entity tests', () => {

    it('create a user', () => {
        const user = new User({
            name: 'Felip',
            email: 'felipe@email.com',
            password: '123456',
        });

        expect(user).toBeInstanceOf(User);

        expect(user.id);
    });

    it('created a user has email', () => {
        const user = new User({
            name: 'Felip',
            email: 'felipe@email.com',
            password: '123456',
        });

        expect(user).toBeInstanceOf(User);

        expect(user.email).toEqual('felipe@email.com');
    });

    it('create a user withou email', () => {
        const user = new User({
            name: 'Felip',
            password: '123456',
        });

        expect(user).toBeInstanceOf(User);

        // expect(user).toThro();
    });

});