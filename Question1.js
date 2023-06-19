var fullwordList =['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

var duplicates = fullwordList.filter((word, index) => fullwordList.indexOf(word) !==index);
var commonValues =fullwordList.filter((word)  => wordsToRemove.includes(word));

console.log('Duplicates:',duplicates);
console.log('common Values:', commonValues)

//Output: Common Values: ['1','2','3']