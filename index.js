const standardizeInput = function(input) {
    const array = []
    for (const value in input) {
        array.push(input[value])
    }
    return array
}

let myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection)

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

let myMap = function(collection, callback) {
    const newCollection = standardizeInput(collection)

    return newCollection.map(callback)
}

function myReduce(collection, reducer, acc) {
    const newCollection = standardizeInput(collection)
    if (acc) {
        return newCollection.reduce(reducer, acc)
    } else {
        acc = newCollection[0]
        const updatedCollection = newCollection.slice(1)

        return updatedCollection.reduce(reducer, acc)
    }
}

function myFind(collection, predicate) {
    const newCollection = standardizeInput(collection)

    return newCollection.find(predicate)
}

let myFilter = (collection, predicate)  => {
    const newCollection = standardizeInput(collection)

    return newCollection.filter(predicate)
}

let mySize = collection => standardizeInput(collection).length;

let myFirst = (array, n = false) => {
    // return n ? return array.slice(0, n) : return array[0]
    // return n ? array.slice(0, n) : array[0]
    if (n) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

let myLast = (array, n = false) => {
    return n ? array.slice(array.length - n, array.length) : array[array.length-1]
}

let myKeys = object => Object.keys(object);

let myValues = object => Object.values(object);

//sorting practice

//