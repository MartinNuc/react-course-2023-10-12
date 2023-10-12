
function isPalindrome(string) {
  string = string.toLowerCase()
  if (string === '') return false;

  for( let i = 0 ; i < string.length ; i++) {
    const character = string[i];
    const opposite = string[string.length - i - 1];

    if (character !== opposite) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('Ahoj')) // false
console.log(isPalindrome('Anna')) // true