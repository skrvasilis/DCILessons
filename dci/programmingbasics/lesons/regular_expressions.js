// match


function vowels(str,str2,str3) {
    let result =str.match(/[a]/gi); // creates an array with the vowels that finds in the string. [i is for insensitive]
    // console.log(result);
    return result;
}
console.log('ex 4 ', vowels('abcdef', 'abcde', 'abc'));
console.log('ex 4 ', vowels('here we are now'));


