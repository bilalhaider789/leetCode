// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

 

// Example 1:

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation: 
// promiseAll(functions).then(console.log); // [5]

// The single function was resolved at 200ms with a value of 5.

var index = 0
var tTimes = []

setTimeout = (f, t) => {
    tTimes[index] = t
    f()
}


Object.defineProperty(performance, "now", {value: () => 0, writable: true})

var promiseAll = async function(functions) {
    var start = performance.now()

    var errors = []
    var results = []
    for (var i = 0; i < functions.length; ++i) {
        try {
            index = i
            results[i] = await functions[i]()
        } catch (e) {
            console.log(e)
            errors[i] = e
        }
    }

    if (errors.length) {
        var min = 1000000
        var error
        errors.forEach((e, i) => {
            if (tTimes[i] < min) {
                error = e
                min = tTimes[i]
            }
        })
        performance.now = () => start + min
        throw error
    } else {
        var max = 0
        results.forEach((_, i) => {
            if (tTimes[i] > max) {
                max = tTimes[i]
            }
        })
        performance.now = () => start + max
        return results
    }
}