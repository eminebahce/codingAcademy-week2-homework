const giveItBackLater = (value, callback) => {
    const getValue = () => {
        callback(value);
    }
    setTimeout(getValue, 100);
}

const promiseToGiveItBackLater = (value) => {
    return new Promise(resolve => {
        const getValueWithPromise = () => {
            resolve(value);
        }
        setTimeout(getValueWithPromise, 100);
    })
}

const addSomePromises = (somePromise) => {
    const resolved = (value) => Promise.resolve(value + value);
    const rejected = (value) => Promise.resolve(value + value + value);

    return somePromise
        .then((value) => resolved(value))
        .catch((value) => rejected(value));
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };