"use strict";
// Challenge 1
// Function capitalizeFirstLetter:
// 1) Takes a string as parameter.
exports.__esModule = true;
exports.isEmpty = exports.makeHashTag = exports.shift = exports.camelCase = exports.snakeCase = exports.kebobCase = exports.removeXSpaces = exports.capWords = exports.allCaps = exports.capitalizeFirstLetter = void 0;
// 2) splits[0] the first letter in the string,
// and calls .toUpperCase() to capitalize it.
// 3) We save the remainder of the string to a variable
// slicing from the [1st] index position to the end of the string.
// 4) We create a new_string variable that concatenates
// the first_letter to the remainder of the string.
// 5) Return the new string
function capitalizeFirstLetter(string) {
    var FirstLetter = string[0].toUpperCase();
    var remainder = string.slice(1);
    var NewString = (FirstLetter + remainder);
    return NewString;
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
// console.log( "1. " + capitalizeFirstLetter('foo'));
// Challenge 2
// Function AllCaps:
// 1) Takes a string as a paramter
// 2) returns a capitalized string calling toUpperCase() on the whole string
function allCaps(string) {
    return string.toUpperCase();
}
exports.allCaps = allCaps;
// console.log( "2. " + allCaps('foo bar'));
// Challenge 3
// Function capWords:
// 1) Takes a string as paramter
// 2) creates an array of strings split where a space exists
// 3) maps each string in the array, capitalizing the first letter (capitalizeFirstLetter())
// and we return a new string with the capitalizedFirstLetters
// of the strings to a new string with .join() which returns
function capWords(string) {
    var array = string.split(' ');
    return array.map(capitalizeFirstLetter).join(' ');
}
exports.capWords = capWords;
// console.log(capWords('foo bar'))
// Challenge 4
// Function removeXSpaces
function removeXSpaces(string) {
    var trimmed = string.trim();
    return trimmed.split(/\s+/).join(' ');
}
exports.removeXSpaces = removeXSpaces;
// console.log(removeXSpaces('foo   bar'))
// Challenge 5
function kebobCase(string, separator) {
    if (separator === void 0) { separator = '-'; }
    var lowered = string.toLowerCase();
    var char = lowered.split('');
    var filtered = char.filter(function (charater) {
        var code = charater.charCodeAt(0);
        if (code > 96 && code < 123) {
            return true;
        }
        if (code > 47 && code < 58) {
            return true;
        }
        if (code === 32 || code === separator.charCodeAt(0)) {
            return true;
        }
        return false;
    });
    var noSpace = removeXSpaces(filtered.join(''));
    return noSpace.split(' ').join(separator);
}
exports.kebobCase = kebobCase;
// console.log(kebobCase('fofo bar bAr-e'))
// Challenge 6
function snakeCase(string) {
    return kebobCase(string, '_');
}
exports.snakeCase = snakeCase;
// console.log(snakeCase('fofo bar bAr-e'))
// Challenge 7
function camelCase(string) {
    var array = string.trim().split(' ');
    var first = array[0].toLowerCase();
    var remainder = array.slice(1).map(capWords).join('');
    return [first, remainder].join('');
}
exports.camelCase = camelCase;
// console.log(camelCase('fofo bar bAr-e'))
// Challenge 8
function shift(string, charSpaces) {
    return string.slice(charSpaces) + string.slice(0, charSpaces);
}
exports.shift = shift;
// console.log(shift("foo bare", 3))
// Challenge 9
function makeHashTag(string) {
    var array = string.trim().split(' ');
    var StringsHigherThan3 = [];
    for (var i = 0; i < array.length; i += 1) {
        if (array[i].length > 3) {
            // console.log(array[i])
            var capString = "#".concat(capWords(array[i]));
            StringsHigherThan3.push(capString);
        }
    }
    return StringsHigherThan3;
}
exports.makeHashTag = makeHashTag;
// console.log(makeHashTag('lol hehehehe evan joshy foo'));
// Challenge 10
function isEmpty(string) {
    var trimmed = string.trim();
    return trimmed.split(/\s+/).join('').length === 0;
}
exports.isEmpty = isEmpty;
