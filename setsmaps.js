// const ids = new Set(['Hi', 'whats', 'up ?']);
// ids.add(2);
//
// for(const value of ids.values()) {
//     console.log(value);
// }

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};
const person3 = {name: 'Ralph'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
// personData.set(person2, [{ date: 'tomorrow', price: 200}]);

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]],[person3,[{date: '28 april', price: 68}]]]);
personData.set(person2, [{ date: 'tomorrow', price: 200}]);

// console.log(personData);
// console.log(personData.get(person1));

// for(const entry of personData.entries()) {
//     console.log(entry);
// }

// for(const[sleutel, waarde] of personData.entries()) {
//     console.log(sleutel, waarde);
// }

// for(const toegangsSleutel of personData.keys()) {
//     console.log(toegangsSleutel);
// }

// for(const waarde of personData.values()) {
//     console.log(waarde);
// }

console.log(personData.size);
