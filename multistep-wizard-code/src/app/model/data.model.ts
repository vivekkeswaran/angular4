export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    skills: Array<string> = [];
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.skills = [];
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Employee {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    address: Address = null
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}