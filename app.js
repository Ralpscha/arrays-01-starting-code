// const numbers = [1,2,3];
// console.log(numbers);

// const moreNumbers = new Array('Hi','Whats up');
// console.log(moreNumbers);
//
// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);
//
// const listItems = document.querySelectorAll('li');
// console.log(listItems);
//
// const moreNumbers = Array.from(listItems);
// console.log(moreNumbers);
//
// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];
//
// const analyticsData = [[1, 1.6],[-5.4, 2.1]];
// for (const data of analyticsData) {
//     for(const dataPoint of data){
//         console.log(dataPoint);
//     }
// }
// console.log(personalData[1]);
//
// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// console.log(hobbies);
// hobbies.unshift('Coding'); //coding wordt de eerste
// console.log(hobbies);
// const poppedValue = hobbies.pop(); //pop verwijdert de laatste
// console.log(hobbies);
// hobbies.shift(); // drops first element
// console.log(hobbies);
//
// hobbies[1] = 'Real Coding';
// // console.log(hobbies, hobbies[4]);
//
// hobbies.splice(0,0, 'Good Food');
// console.log(hobbies);
//
// const removedElements = hobbies.splice(-2,1);
// console.log(hobbies);
//
const testResults = [1,5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(); //copies the array
//
// testResults.push(5.91);
// console.log(testResults, storedResults);
//
//
// console.log(testResults.includes(10.98));
// const personData = [{name: 'Max'}, {name: 'Manuel'}];
// // console.log(personData.indexOf({name: 'Manuel'})); // dit geeft een -1.
//
// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// });
// console.log(manuel);
//
// const maxIndex = personData.findIndex((person, idx, persons)=>{
//     return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];
//
// // for (const price of prices) {
// //     taxAdjustedPrices.push(Math.round(price * (1 + tax)*100)/100);
// // }
//
// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: Math.round(price * (1 + tax)*100)/100};
//     taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: Math.round(price * (1 + tax)*100)/100};
    return priceObj;
});
// console.log('Prices: ' , prices, 'Adjusted: ', taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if(a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(sortedPrices);
console.log(sortedPrices.reverse());

const filteredArray = prices.filter((price, index, prices) => {
    return price > 6;
});
console.log(filteredArray);