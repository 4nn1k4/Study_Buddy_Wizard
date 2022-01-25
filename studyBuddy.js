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
});
sentence.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("sentence");
});
meaning.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("meaning");
});
hint1.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("hint 1");
});
hint2.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("hint 2");
});
hint3.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance("hint 3");
});





function playUtterance(utterance){
    var synth = window.speechSynthesis,
    voices = window.speechSynthesis.getVoices(),
    msg = new SpeechSynthesisUtterance(utterance);
    msg.lang = 'en-UK';                            
    msg.rate = 1.25;
    msg.voice = voices[6]; //4 female 6 male
    synth.speak(msg);
}

