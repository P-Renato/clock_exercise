function areAllNumbersEven(numbers) {
    const allEVen = numbers.every(num => num%2 === 0);
    return allEVen;
}
areAllNumbersEven([4,6,-8,14])

console.log("------------------------")

function getBiggestNumberInArrays(numbers1, numbers2) {
    const num1 = Math.max(...numbers1)
    const num2 = Math.max(...numbers2)
    return num1 > num2 ? num1 : num2;


}
console.log(getBiggestNumberInArrays([7,2,9],[15,28,42]))

function getLongestString(arrayOfStrings) {
    const strArr = arrayOfStrings.reduce((long,cur) =>
        cur.length > long.length ? cur : long
    );
    if(arrayOfStrings === "") return "";
    return strArr;
}

getLongestString(["Montgomery","Juneau","Phoenix","Little Rock","Sacramento","Denver","Washington, D.C.","Hartford","Dover","Tallahassee"]) 

console.log("------------------------")

function everyNPositions(message, step) {
    return [...message]              
    .filter((_, i) => i % step === 0) 
    .join(""); 
    
}

console.log(everyNPositions("Which framework should I choose?", 6))

/*
function everyNPositions(message, step) {
    const msgIndex = Array.from(message)
    const result = []

    for (let i = 0; i < msgIndex.length; i++) {
        if (i % step === 0) {
            result.push(msgIndex[i])
        }
    }

    return result.join("") // combine into a string
}

console.log(everyNPositions("Which framework should I choose?", 6))
*/




console.log("------------------------")

function doubleNumbers(numbers) {
    const doubledNumbers = numbers.map(num => num*2)
    return doubledNumbers
}

console.log(doubleNumbers([17,42,9,31,56]))

console.log("------------------------")

function mostRepetitions(string1, string2, letter) {
    const count1 = [...string1].filter(ch => ch === letter).length;
    const count2 = [...string2].filter(ch => ch === letter).length;

    if(count1 >= count2) return string1;
    return string2;
}

console.log(mostRepetitions("Los Angeles","Texas","s"))

console.log("------------------------")

function getMillisecondsBetween(date1, date2) {
    return Math.abs(new Date(date1) - new Date(date2)) / 100000
}

const date1 = "2005-03-02T10:01:15.000Z";
const date2 = "2005-03-02T10:00:05.000Z"
console.log(getMillisecondsBetween(date1,date2))

console.log("------------------------")

function getMonthOfTheYear(date) {
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // const monthStr = month[(new Date(date)).getMonth()];
    // console.log(monthStr)

    const month = new Date(date).toLocaleDateString('en-EN', {month: 'long'})
    console.log(month)
}
getMonthOfTheYear("Date Sun Feb 04 2024 11:41:11 GMT+0100 (Central European Standard Time)")

console.log("------------------------")

function addDays(initialDate, daysCount) {
    // const days = new Date(initialDate).getDate();
    // const newDay = days + daysCount;

    // const addedDays = new Date(initialDate).setDate(newDay)
    // function changeDay(timestamp, newDay) {

    //     const date = new Date(timestamp);

    //     date.setDate(newDay);

    //     return date;
    // }
    // const updatedDate = changeDay(addedDays, newDay)
    // console.log(updatedDate) 

    const date = new Date(initialDate);
    date.setDate(date.getDate() + daysCount);
    return date;

}
console.log(addDays("Date Mon May 01 2023 12:00:00 GMT+0200 (Central European Summer Time)", 11))
console.log(addDays("1994-09-25T16:23:00.000Z", 9))



console.log("------------------------")





console.log("------------------------")





console.log("------------------------")
