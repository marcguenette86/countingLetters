function countLetters(str) {
  var noSpaces = str.split(" ").join("").toLowerCase();
  var dictionary = {};
  for (var i = 0; i < noSpaces.length; i++){
    if (!dictionary.hasOwnProperty(noSpaces[i])) {
      dictionary[noSpaces[i]] = 1;
    }
    else {
      dictionary[noSpaces[i]] += 1;
    }
  }
  return dictionary;
}


var str = process.argv.slice(2).join(" ");
console.log(countLetters(str));

