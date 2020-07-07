//declaring multistatement string
var multiStatementString = new Array();
//intializing multistatement string
multiStatementString.push("today is the first day of orxe3 training.");
multiStatementString.push("today we got to know about microfrontend(intro) and most of today's session is about Typescript.");
multiStatementString.push("here i am solving assignment on it.");
//functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getWords(input) {
    var words = input.split(" ");
    return words;
}
function getWordCountMap(words, wordCountMap) {
    if (words.length === 0) {
        return wordCountMap;
    }
    words.forEach(function (word) {
        wordCountMap.set(word, wordCountMap.get(word) ? wordCountMap.get(word) + 1 : 1);
    });
    return wordCountMap;
}
//1. now converting string string into statement case
console.log("question 1 \n");
console.log("#########################################################################################\n");
multiStatementString.forEach(function (input) { console.log(capitalizeFirstLetter(input)); });
console.log("\n#########################################################################################\n");
//2. print number of words in string
console.log("question 2 \n");
console.log("#########################################################################################\n");
var count = 0;
multiStatementString.forEach(function (input) { count += input.split(" ").length; });
console.log("Total number of words : " + count);
console.log("\n#########################################################################################\n");
//creating maps for words
var wordCountMap = new Map();
for (var _i = 0, multiStatementString_1 = multiStatementString; _i < multiStatementString_1.length; _i++) {
    var i = multiStatementString_1[_i];
    var words = i.split(" ");
    wordCountMap = getWordCountMap(words, wordCountMap);
}
//3. string containing a in it
console.log("question 3\n");
console.log("#########################################################################################\n");
console.log("words stars with a: \n");
Array.from(wordCountMap.entries()).forEach(function (entry) { if (entry[0].startsWith('a')) {
    console.log(entry[0]);
} });
console.log("\n#########################################################################################\n");
//4. numer of matching words
console.log("question 4\n");
console.log("#########################################################################################\n");
console.log("Words and Their Counts\n");
Array.from(wordCountMap.entries()).forEach(function (entry) { return console.log(entry[0] + ' occurs ' + entry[1] + " times"); });
console.log("\n#########################################################################################\m");
