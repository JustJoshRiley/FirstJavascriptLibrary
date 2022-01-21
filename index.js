// Challenge 1

function capitalize (string) {
    first_letter = string[0].toUpperCase()
    remainder = string.slice(1)

    const new_string = (first_letter + remainder)
    return new_string
}
// console.log(capitalize('foo bar'));

// Challenge 2
function allCaps(string) {
    return string.toUpperCase();
}
// console.log(allCaps('foo bar'));


// Challenge 3
function capWords (string) {
    array = string.split(" ")
    return array.map(capitalize).join(" ")
}
// console.log(capWords('foo bar'))


// Challenge 4
function removeXSpaces (string) {
    const trimmed = string.trim()
    return trimmed.split(/\s+/).join(" ")
}
// console.log(removeXSpaces('foo   bar'))

// Challenge 5
function kebobCase (string, separator = '-') {
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
function snakeCase (string) {
    return kebobCase(string, '_')
}
// console.log(snakeCase('fofo bar bAr-e'))

// Challenge 7
function camelCase (string) {
    const array = string.trim().split(" ")
    const first = array[0].toLowerCase()
    const remainder = array.slice(1).map(capitalize).join("")
    return[first, remainder].join("")
}
// console.log(camelCase('fofo bar bAr-e'))

// Challenge 8
function shift (string, charSpaces) {
    return string.slice(charSpaces) + string.slice(0, charSpaces)
}
// console.log(shift("foo bare", 3))

// Challenge 9
function makeHashTag (string) {
    const array = string.trim().split(" ")
    const strings_higher_than_3 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 3) {
            console.log(array[i])
            const capString = "#" + capitalize(array[i])
            strings_higher_than_3.push(capString)
        }
    }
    return strings_higher_than_3
}
console.log(makeHashTag("lol hehehehe evan joshy foo"))

// Challenge 10
function isEmpty (string) {
    const trimmed = string.trim()
    return trimmed.split(/\s+/).join("").length === 0;
}
console.log(isEmpty('flase'))
console.log(isEmpty(' '))
