export interface Address {
    address: string;
    city: string;
    country: string;
    postalCode: string;
    state: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    birthDate: string;
    image: string;
    address: Address;
}