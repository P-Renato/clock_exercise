const numbers = [10, 20, 30];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 60

console.log("------------------------")

const numbers1 = [5, 2, 9, 1, 8];
const max = numbers1.reduce((acc, num) => Math.max(acc, num), -Infinity);
console.log(max); // 9

console.log("------------------------")

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }

console.log("------------------------")

const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArrays.reduce((acc, array) => {
    return acc.concat(array);
}, []);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]

console.log("------------------------")

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc;
}, {});

console.log(groupedByAge);
// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }

console.log("------------------------")

function arrayToObject(strings) {
    return strings.reduce((obj, str, index) => {
        if (!(str in obj)) {
            obj[str] = index;
        }
        return obj;
    }, {});
}

console.log("------------------------")




console.log("------------------------")




console.log("------------------------")




console.log("------------------------")




console.log("------------------------")




console.log("------------------------")




console.log("------------------------")



console.log("------------------------")

