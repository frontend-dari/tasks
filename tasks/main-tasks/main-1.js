const string = "Привет! Как дела?";

const vowels = ["а", "е", "ё ", "и", "о", "у", "э", "ы", "э", "ю", "я"];

const getVowels = stringToFilter => {
  let gottenVowels = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      gottenVowels += currentLetter;
    }
  }

  return gottenVowels;
}

console.log(getVowels(string));