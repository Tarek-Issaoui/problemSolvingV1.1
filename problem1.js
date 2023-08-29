/**
 *? Alphabet Inventory
 *? Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.
 *? alphaCount("aBc", "aabbccdd") // "a:2,b:2,c:2"
 *? alphaCount("x", "Racer X is my friend") //	"x:1"
 *? alphaCount("123", "o hai") // "no matches"
 */
const alphaCount = (alphabet, text) => {
    let store = {};
    let count = 0
    for (let e of alphabet) {
        for (let e1 of text) {
            e1 === e && count++; 
            store[e.toLowerCase()] = count
        }

    }
    return JSON.stringify(store).slice(1, JSON.stringify(store).length - 1)
};
