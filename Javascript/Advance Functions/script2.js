console.log('Log 1');

setTimeout(() => {
    console.log('Log 2');
}, 0);


setTimeout(() => {
    console.log('Log 3');
}, 2000);


console.log('Log 4');

console.log('Log 5');


setTimeout(() => {
    console.log('Log 6');
}, 1000);

// Output

/**
 * 1,4,5,2,6,3
 * 
 */