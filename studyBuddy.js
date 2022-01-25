var introS = document.getElementById("IntroductionSystem"),
introU = document.getElementById("IntroductionUser"),
notDefined = document.getElementById("notDefined"),
helpBtn = document.getElementById("helpBtn"),
optionsSystem = document.getElementById("optionsSystem"),
optionsUser = document.getElementById("optionsUser"),
createSentence = document.getElementById("createSentence"),
createMeaning = document.getElementById("createMeaning"),
pronounceWord = document.getElementById("pronounceWord"),
correct = document.getElementById("correct"),
incorrect = document.getElementById("incorrect"),
outro = document.getElementById("outro"),
vocabId = document.getElementById("vocabId"),
pronunciation = document.getElementById("pronunciation"),
sentence = document.getElementById("sentence"),
meaning = document.getElementById("meaning"),
hint1 = document.getElementById("hint1"),
hint2 = document.getElementById("hint2"),
hint3 = document.getElementById("hint3"),
vocabNum = 0,
vocabList= [];

introS.addEventListener("click",function(){
    playUtterance("introS");
});

introU.addEventListener("click",function(){
    playUtterance("introU");
});

notDefined.addEventListener("click",function(){
    playUtterance("not Defined");
});
helpBtn.addEventListener("click",function(){
    playUtterance("help");
});
optionsSystem.addEventListener("click",function(){
    playUtterance("optionsS");
});
optionsUser.addEventListener("click",function(){
    playUtterance("optionsU");
});
createSentence.addEventListener("click",function(){
    playUtterance("sentence request");
});
pronounceWord.addEventListener("click",function(){
    playUtterance("pronunciation request");
});
createMeaning.addEventListener("click",function(){
    playUtterance("meaning request");
});
correct.addEventListener("click",function(){
    playUtterance("correct");
});
incorrect.addEventListener("click",function(){
    playUtterance("incorrect");
});
outro.addEventListener("click",function(){
    playUtterance("outro");
});
pronunciation.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("pronunciation");
    console.log("Current Nr Input: " + vocabNum);
});
sentence.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("sentence");
    console.log("Current Nr Input: " + vocabNum);
});
meaning.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("meaning");
    console.log("Current Nr Input: " + vocabNum);
});
hint1.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("hint 1");
    console.log("Current Nr Input: " + vocabNum);
});
hint2.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("hint 2");
    console.log("Current Nr Input: " + vocabNum);
});
hint3.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("hint 3");
    console.log("Current Nr Input: " + vocabNum);
});





function playUtterance(utterance){
    console.log(utterance);
}

