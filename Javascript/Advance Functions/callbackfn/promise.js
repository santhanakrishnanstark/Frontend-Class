// Promise

const myPromise = new Promise((resolve, reject) => {


    // either resolve or reject will happen, once done it is fullfilled

    setTimeout(() => {
        resolve("My promise Success!");
    }, 3000);

    setTimeout(() => {
        reject("something happened!")
    }, 4000);
});


myPromise
    .then(value => {
        console.log(value)
    })
    .then(() => {
        console.log('After myPromise call')
    })
    .catch(error => console.log('Promise error: ', error))