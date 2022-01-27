// Challenge 1
// Function capitalizeFirstLetter:
// 1) Takes a string as parameter.

// 2) splits[0] the first letter in the string, 
// and calls .toUpperCase() to capitalize it.

// 3) We save the remainder of the string to a variable
// slicing from the [1st] index position to the end of the string.

// 4) We create a new_string variable that concatenates
// the first_letter to the remainder of the string.

// 5) Return the new string

function capitalizeFirstLetter(string) {
    first_letter = string[0].toUpperCase()
    remainder = string.slice(1)

    const new_string = (first_letter + remainder)
    return new_string
}
// console.log( "1. " + capitalizeFirstLetter('foo'));

// Challenge 2

// Function AllCaps:

// 1) Takes a string as a paramter

// 2) returns a capitalized string calling toUpperCase() on the whole string 

function allCaps(string) {
    return string.toUpperCase();
}
// console.log( "2. " + allCaps('foo bar'));


// Challenge 3

// Function capWords:

// 1) Takes a string as paramter

// 2) creates an array of strings split where a space exists

// 3) maps each string in the array, capitalizing the first letter (capitalizeFirstLetter())
// and we return a new string with the capitalizedFirstLetters 
// of the strings to a new string with .join() which returns

function capWords(string) {
    array = string.split(" ")
    return array.map(capitalizeFirstLetter).join(" ")
}
// console.log(capWords('foo bar'))


// Challenge 4
// Function removeXSpaces

function removeXSpaces(string) {
    const trimmed = string.trim()
    return trimmed.split(/\s+/).join(" ")
}
// console.log(removeXSpaces('foo   bar'))

// Challenge 5
function kebobCase(string, separator = '-') {
    const lowered = string.toLowerCase()
    const char = lowered.split("")
    const filtered = char.filter((charater) => {
        const code = charater.charCodeAt(0)
        if (code > 96 && code < 123) {
            return true
        } else if ( code > 47 && code < 58) {
            return true
        } else if (code === 32 || code === separator.charCodeAt(0)) {
            return true
        }
        return false
    })
    const noSpace = removeXSpaces(filtered.join(''))
    return noSpace.split(' ').join(separator)
}
// console.log(kebobCase('fofo bar bAr-e'))

// Challenge 6
function snakeCase(string) {
    return kebobCase(string, '_')
}
// console.log(snakeCase('fofo bar bAr-e'))

// Challenge 7
function camelCase(string) {
    const array = string.trim().split(" ")
    const first = array[0].toLowerCase()
    const remainder = array.slice(1).map(capWords).join("")
    return[first, remainder].join("")
}
// console.log(camelCase('fofo bar bAr-e'))

// Challenge 8
function shift(string, charSpaces) {
    return string.slice(charSpaces) + string.slice(0, charSpaces)
}
// console.log(shift("foo bare", 3))

// Challenge 9
function makeHashTag(string) {
    const array = string.trim().split(" ")
    const strings_higher_than_3 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 3) {
            // console.log(array[i])
            const capString = "#" + capWords(array[i])
            strings_higher_than_3.push(capString)
        }
    }
    return strings_higher_than_3
}
console.log(makeHashTag("lol hehehehe evan joshy foo"))

// Challenge 10
function isEmpty(string) {
    const trimmed = string.trim()
    return trimmed.split(/\s+/).join("").length === 0;
}
console.log(isEmpty('flase'))
// console.log(isEmpty(' '))

module.exports.capitalizeFirstLetter = capitalizeFirstLetter
module.exports.allCaps = allCaps
module.exports.capWords = capWords
module.exports.removeXSpaces = removeXSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty
