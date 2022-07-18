<script>

var wholeString = prompt();
var dividedString = wholeString.split(" ");
var longestWord = dividedString[0];

// for getting the scores in each length
for (var i = 1; i < dividedString.length; i++){
    if (getScore(longestWord) < getScore(dividedString[i])){
    	longestWord = dividedString[i];
    } 
    else if (getScore(longestWord) == getScore(dividedString[i])){
    	longestWord = getScoreVowels(longestWord, dividedString[i]);
   	}

}
console.log(longestWord.match(/[a-zA-Z0-9]/g).join(''));

function getScore(passedWord){
	var expression = /[a-zA-Z0-9]/g;
    return passedWord.match(expression).length;
}

function getScoreVowels(currentLongest, passedWord){
	var expression = /[aeiou]/g;
    
	if (currentLongest.match(expression).length > passedWord.match(expression).length){
    	return currentLongest;
    }
    else {
    	return passedWord;
    }
}


</script