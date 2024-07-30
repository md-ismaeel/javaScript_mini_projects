const inputEl1 = document.querySelector(".input1");
const inputEl2 = document.querySelector(".input2");
const btnEl = document.querySelector(".btn");
const outputEl = document.querySelector(".outPut");

const anagramChecker = () => {
    let firstWord = inputEl1.value.toLowerCase().replace(/\s+/g, "");
    let secondWord = inputEl2.value.toLowerCase().replace(/\s+/g, "");

    // console.log(firstWord, secondWord);
    if (firstWord === "" || secondWord === "") {
        outputEl.textContent = "Please enter text in both fields!!";
        return;
    }

    if (firstWord.length !== secondWord.length) {
        outputEl.textContent = "The words/phrases are not anagrams!!";
        return;
    }

    let sortedFirstWord = firstWord.split("").sort().join("");
    let sortedSecondWord = secondWord.split("").sort().join("");
    // console.log(sortedFirstWord);

    if (sortedFirstWord !== sortedSecondWord) {
        outputEl.textContent = "The words/phrases are not anagrams.";
    } else {
        outputEl.textContent = "The words/phrases are anagrams!!";
    }

    inputEl1.value = "";
    inputEl2.value = "";
};

btnEl.addEventListener("click", anagramChecker);
