import { test, describe, expect } from "vitest";
import { User } from "./user";


test('should createa a user', () => {
    const user = new User({
        name: 'Felipe',
        email: 'santospinheiro627@gmail.com',
        createdAt: new Date(),
    });

    expect(user).toBeInstanceOf(User);
})

test('should be can create and user', () => {
    const user = new User();

    expect(user).toThrowErrorMatchingInlineSnapshot();
})