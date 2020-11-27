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
//
// console.log(personalData[1]);
//
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
console.log(hobbies);
hobbies.unshift('Coding'); //coding wordt de eerste
console.log(hobbies);
const poppedValue = hobbies.pop(); //pop verwijdert de laatste
console.log(hobbies);
hobbies.shift(); // drops first element
console.log(hobbies);

hobbies[1] = 'Real Coding';
// console.log(hobbies, hobbies[4]);

hobbies.splice(0,0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2,1);
console.log(hobbies);
