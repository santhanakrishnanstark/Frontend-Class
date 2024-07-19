function fn1() {
    console.log('**** Function 1')
}

function fn2() {
    console.log('**** Function 2')
}

function fn3() {
    console.log('**** Function 3')
}

fn1();


function calculateValues(f1, f2, f3) {
    f2();
    f1();
    f3();
}


calculateValues(fn1, fn2, fn3);


// 

function success() {
    console.log('**** Function executed Successfully!!!')
}

function fail() {
    console.log('**** Function failed!!!')
}



calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0], success, fail);


function calculateSum(arr, successCb, failCb) {
    let sum;
    console.log(arr)
    sum = arr.reduce((sum, value) => sum += value, 0);

    console.log(sum);

    if ((sum === 55) && (arr.length === 10)) {
        successCb();
    } else {
        failCb();
    }
}