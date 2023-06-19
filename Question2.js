const word = '00000111110101001111100001001';
const characters = word.split('');
const longestChain = characters.reduce((acc, curr, index, array) => {
    if (curr ===array[index -1]) {
        acc.currentCount++;
    }else {
        acc.longestCount = Math.max(acc.longestCount, acc.currentCount);
        acc.currentCount =1;
    }
    return acc;
}, { currentCount:0, longestCount:0});
console.log('Longest chain:', longestChain.longestCount);