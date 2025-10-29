function areAllNumbersEven(numbers) {
    const allEVen = numbers.every(num => num%2 === 0);
    console.log(allEVen)
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

function extractElementsBetweenPositions(numbers, n, m) {
    const newArray = numbers.filter((cur, index) => index >= n && index <= m);
    console.log(newArray);
    return newArray;
}

extractElementsBetweenPositions([10,24,7,42,15,8,33,19,56,91,3,28,12,50,67],4,11)
extractElementsBetweenPositions([10,24,7,42,15,8,33,19,56,91,3,28,12,50,67],9,1)

console.log("------------------------")


function isSorted(numbers) {

    let isAscending = true;
    let isDescending = true;

    for (let i=0;i<numbers.length -1;i++){
        if( numbers[i] > numbers[i+1]){
            isAscending = false;
        }
        if(numbers[i] < numbers[i+1]){
            isDescending = false;
        }
    }
    const result = isAscending || isDescending;
    console.log(result);
    return result;
}
isSorted([19,10,23])
isSorted([1,10,23])
isSorted([31,29,23])


console.log("------------------------")

function halfAndHalf(text) {
    // const firstHalf = text.split(" ")[0].toLowerCase();
    // const secondHalf = text.split(" ")[1].toUpperCase();
    // const indexSecondHalf = secondHalf.split("")[0];
    // console.log(indexSecondHalf)
    // const newSecondHalf = indexSecondHalf[0].replace(indexSecondHalf[0], indexSecondHalf[0].toLowerCase());
    // console.log(newSecondHalf)
    // const fixedFirstLetter = secondHalf.replace(indexSecondHalf[0], newSecondHalf)
    // console.log(fixedFirstLetter)
    // const fLowSUpper = firstHalf + " " + fixedFirstLetter;
    // console.log(fLowSUpper)
    // return fLowSUpper;


    const length = text.length;
    const midpoint = Math.floor(length / 2);
    
    const firstHalf = text.substring(0, midpoint).toLowerCase();
    const secondHalf = text.substring(midpoint).toUpperCase();
    console.log(firstHalf + secondHalf);
    return firstHalf + secondHalf;
}
halfAndHalf("Hello World")
halfAndHalf("Hello World From Test")

console.log("------------------------")

function isSameDay(date1, date2) {
    const dateOne = new Date(date1);
    const dateTwo = new Date(date2);

    const yearOne = dateOne.getFullYear();
    const yearTwo = dateTwo.getFullYear();
    const monthOne = dateOne.getMonth();
    const monthTwo = dateTwo.getMonth();
    const dayOne = dateOne.getDate();
    const dayTwo = dateTwo.getDate();
    const hourOne = dateOne.getHours();
    const hourTwo = dateTwo.getHours();

    if(yearOne == yearTwo && monthOne == monthTwo && dayOne == dayTwo && hourOne == hourTwo){
        console.log("true")
        return true;
    } else {
        console.log("false")
        return false;
    }

    console.log("year 1: ", yearOne, "year 2:", yearTwo)
    console.log("Date 1: ", dateOne);
    console.log("Date 2: ", dateTwo);
}

isSameDay("2007-11-10T10:00:00.000Z","2008-12-10T11:00:00.000Z");
isSameDay("2017-06-19T10:00:00.000Z","2017-06-19T11:00:00.000Z");



console.log("------------------------")

function getMaxMovingDistance(budget, weight, cost) {
    // const actualCost = budget / cost;
    // const km = weight  / actualCost;
    // console.log(km);
    distance = (budget * 1000) / (weight * cost)
    console.log(distance)
    return distance
}
getMaxMovingDistance(700, 440, 50);
getMaxMovingDistance(2000, 410, 109);


console.log("------------------------")

function arrayToObject(strings) {
    let newObj = {};
    strings.forEach((str,index) => {
        if(!(str in newObj)){
            newObj[str] = index;
        }
        console.log("String: ", str);
        console.log("Index: ", index);
        console.log("NewObj: ", newObj);
    })
    return newObj;
}

arrayToObject(["JavaScript","is","awesome"])
arrayToObject(["My","name","is","Pava",".","What","is","your","name","?"])
// output should be this {"awesome":2,"JavaScript":0,"is":1}


/*
function arrayToObject(strings) {
    return strings.reduce((obj, str, index) => {
        if (!(str in obj)) {
            obj[str] = index;
        }
        return obj;
    }, {});
}
*/


console.log("------------------------")

function pickFields(data, fields) {
     const keys = Object.keys(data);
     console.log(keys)

    const newKeys = keys.filter(key => fields.includes(key));
    console.log(newKeys)

     for(let key of keys){
        for(let i=0;i<fields.length;i++){
            if(key ===fields[i]){
                console.log(key);
                return key;
            }
        }
     }
}

const result = pickFields({"color":"blue","name":"Earth","solarSistem":"Milky Way"},["name","color"])


console.log("------------------------")






console.log("------------------------")




console.log("------------------------")





console.log("------------------------")





console.log("------------------------")
