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
vocabNum = 0;

class Vocab{
    constructor(id, name, sen, mean, h1, h2, h3){
        this.id = id;
        this.name = name;
        this.sen = sen;
        this.mean = mean;
        this.h1 = h1;
        this.h2 = h2;
        this.h3 = h3;
    }

    get wordSentence(){
        return this.sen;
    }
    get wordMeaning(){
        return this.mean;
    }
    get wordHint1(){
        return this.h1;
    }
    get wordHint2(){
        return this.h2;
    }
    get wordHint3(){
        return this.h3;
    }
}

var vocabList = [
    new Vocab(1, "callousness", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(2, "indignant", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(3, "detrimental", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(4, "upheaval", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(5, "accumulation", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(6, "avidly", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(7, "quandary", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(8, "rousing", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(9, "rendition", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(10, "harrowing", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(11, "cantankerous", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(12, "joviality", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(13, "quaint", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(14, "exacerbate", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(15, "blotch", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(16, "tarmac", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(17, "strident", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(18, "lugubrious", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(19, "ameliorate", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(20, "libelous", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(21, "braggadocio", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(22, "pule ", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(23, "sparge", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(24, "captious", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(25, "bibulous", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(26, "embonpoint", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(27, "tenebrous", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(28, "parlay", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(29, "legerdemain", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(30, "deracinate", "sen", "mean", "h1", "h2", "h3")
];


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
    playUtterance(vocabList[vocabNum-1].name);
});
sentence.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance(vocabList[vocabNum-1].sen);
});
meaning.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance(vocabList[vocabNum-1].mean);
});
hint1.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance(vocabList[vocabNum-1].h1);
});
hint2.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance(vocabList[vocabNum-1].h2);
});
hint3.addEventListener("click",function(){
    vocabNum = vocabId.value;
    playUtterance(vocabList[vocabNum-1].h3);
});





function playUtterance(utterance){
    var synth = window.speechSynthesis,
    voices = window.speechSynthesis.getVoices(),
    msg = new SpeechSynthesisUtterance(utterance);
    msg.lang = 'en-UK';                            
    msg.rate = 1.1;
    msg.voice = voices[6]; //4 female 6 male
    synth.speak(msg);
}




