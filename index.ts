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

function capitalizeFirstLetter(string:string):string {
  const FirstLetter:string = string[0].toUpperCase();
  const remainder:string = string.slice(1);

  const NewString:string = (FirstLetter + remainder);
  return NewString;
}
// console.log( "1. " + capitalizeFirstLetter('foo'));

// Challenge 2

// Function AllCaps:

// 1) Takes a string as a paramter

// 2) returns a capitalized string calling toUpperCase() on the whole string

function allCaps(string:string):string {
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

function capWords(string:string):string {
  const array:string[] = string.split(' ');
  return array.map(capitalizeFirstLetter).join(' ');
}
// console.log(capWords('foo bar'))

// Challenge 4
// Function removeXSpaces

function removeXSpaces(string:string):string {
  const trimmed:string = string.trim();
  return trimmed.split(/\s+/).join(' ');
}
// console.log(removeXSpaces('foo   bar'))

// Challenge 5
function kebobCase(string:string, separator:string = '-'):string {
  const lowered:string = string.toLowerCase();
  const char:string[] = lowered.split('');
  const filtered:string[] = char.filter((charater) => {
    const code:number = charater.charCodeAt(0);
    if (code > 96 && code < 123) {
      return true;
    } if (code > 47 && code < 58) {
      return true;
    } if (code === 32 || code === separator.charCodeAt(0)) {
      return true;
    }
    return false;
  });
  const noSpace:string = removeXSpaces(filtered.join(''));
  return noSpace.split(' ').join(separator);
}
// console.log(kebobCase('fofo bar bAr-e'))

// Challenge 6
function snakeCase(string:string):string {
  return kebobCase(string, '_');
}
// console.log(snakeCase('fofo bar bAr-e'))

// Challenge 7
function camelCase(string:string):string {
  const array:string[] = string.trim().split(' ');
  const first:string = array[0].toLowerCase();
  const remainder:string = array.slice(1).map(capWords).join('');
  return [first, remainder].join('');
}
// console.log(camelCase('fofo bar bAr-e'))

// Challenge 8
function shift(string:string, charSpaces:number):string {
  return string.slice(charSpaces) + string.slice(0, charSpaces);
}
// console.log(shift("foo bare", 3))

// Challenge 9
function makeHashTag(string:string):string[] {
  const array:string[] = string.trim().split(' ');
  const StringsHigherThan3:string[] = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > 3) {
      // console.log(array[i])
      const capString:string = `#${capWords(array[i])}`;
      StringsHigherThan3.push(capString);
    }
  }
  return StringsHigherThan3;
}
// console.log(makeHashTag('lol hehehehe evan joshy foo'));

// Challenge 10
function isEmpty(string:string):Boolean {
  const trimmed:string = string.trim();
  return trimmed.split(/\s+/).join('').length === 0;
}
// console.log(isEmpty('flase'));
// console.log(isEmpty(' '))

export{capitalizeFirstLetter, allCaps, capWords, removeXSpaces, kebobCase, snakeCase, camelCase, shift, makeHashTag, isEmpty}
