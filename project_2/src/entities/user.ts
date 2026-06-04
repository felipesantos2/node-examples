
export interface UserProps {
    name: string;
    email: string;
    createdAt: Date;
};

export class User {

    private props: UserProps;

    constructor(props: UserProps) {

        if (!props) {
            throw new Error('Invalid args');
        }

        this.props = props;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }
}