import { faker } from '@faker-js/faker';

export function createRandomUser() {
    return {
        login: faker.internet.username(),
        password: faker.internet.password(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email()
    };
}