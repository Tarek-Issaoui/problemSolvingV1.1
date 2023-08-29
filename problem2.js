/**
 * Write a function called agesToMinutes that,
 * accepts an array of object as parameter and
 * return an array of objects after converting the ages from years to minutes
 * using map.
 *
 * var people = [{
 *       name: {
 *             first: 'Majd',
 *             middle: 'Eddin',
 *       },
 *       age: 30
 *       }, {
 *       name: {
 *             first: 'Fatima',
 *             last: 'Himmamy'
 *       },
 *       age: 26
 *       }, {
 *       name: {
 *             first: 'Sahar',
 *             middle: 'MHD'
 *       },
 *       age: 27
 *       }, {
 *       name: {
 *             first: 'Nour',
 *             middle: 'Eddin',
 *       },
 *       age: 15
 *       }, {
 *       name: {
 *             first: 'Ahmad',
 *             last: 'Awad'
 *       },
 *       age: 33
 * }]
 */


function agesToMinutes(arr){
return arr.each(e=> {
    e.age = age*365*3600 +'s'
} )
}

// test test
