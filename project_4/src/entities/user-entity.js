export class User {
    name;

    email;

    password;

    constructor(props) {
        const { name, email, password } = props;

        this.name = name;
        this.email = email;
        this.password = password;

        this.hasEmail();
    }

    hasEmail() {
        if (!this.email) {
            throw new Error("Email is required");
        }
    }
}