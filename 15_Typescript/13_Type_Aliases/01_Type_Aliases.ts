type User={
    name: string;
    lastName: string;
    age: number;
    isStudent: boolean
}

function createPerson(): User {
    return {
        name: "John",
        lastName: "Doe",
        age: 30,
        isStudent: true
    };
}

const user: User = createPerson();

console.log(user);