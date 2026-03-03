//  There are two ways of declaring an Arrays

//  Using the square brackett notation [] to indicate an array of a specific type
//  Using generic Array<type> notaion to indicate an array of a specific type

//  [] notaion

const names: string[] = ["John", "Jane", "Jack", "Jill"];

//  Array<type> notaion

let names2: Array<string> = ["John", "Jane", "Jack", "Jill"];

names2.push("Peter");

console.log(names2);

names2 = names2.filter((name) => name !== "John");

console.log(names2);

const numList: number[] = [1, 2, 3, 4, 5];

numList.push(6);

console.log(numList);

const numList2: Array<number> = [1, 2, 3, 4, 5];

numList2.push(6);

console.log(numList2);