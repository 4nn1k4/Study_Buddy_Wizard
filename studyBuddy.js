import Config from "./Config.js";

var introS = document.getElementById("IntroductionSystem"),
introS2 = document.getElementById("IntroductionSystem2"),
introU = document.getElementById("IntroductionUser"),
notDefined = document.getElementById("notDefined"),
helpBtn = document.getElementById("helpBtn"),
optionsSystem = document.getElementById("optionsSystem"),
optionsSystem2 = document.getElementById("optionsSystem"),
furtherhelp = document.getElementById("furtherHelp"),
optionsUser = document.getElementById("optionsUser"),
createSentence = document.getElementById("createSentence"),
createMeaning = document.getElementById("createMeaning"),
pronounceWord = document.getElementById("pronounceWord"),
nextWord = document.getElementById("nextWord"),
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
    new Vocab(1, "name", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(2, "accumulate", "Waste must not be allowed to accumulate in working areas.", "To accumulate means to gather or pile up especially little by little", "Synonyms for accumulate are to build up, increase or expand", " antonyms for accumulate are lessen, diminish or decrease", "Accumulate originates from the Latin word, accumulāre, which means to heap up, add to or increase"),
    new Vocab(3, "name", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(4, "upheaval", "The civil rights movement marked a period of social upheaval in the U.S.", "An upheaval is a violent or sudden change, causing or involving much difficulty, activity, or trouble:", "Related words to upheaval are overthrow, overturn, rebellion, revolt and revolution,", "An upheaval is always considered to be a bad thing at the time that it occurs, even if it results in improvements.", "Upheaval originates from to upheave, heave meaning to move something heavy using a lot of effort"),
    new Vocab(5, "name", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(6, "rectify", "I had not meant to cause trouble, and asked what I could do to rectify the situation", "To rectify means to correct something or make something right", " synonyms of to rectify are to correct and amend", "Antonyms for to rectify are to damage, harm or hurt", "Rectify originates from the Latin word, rectus, which means right"),
    new Vocab(7, "subsidy", "The city is increasing subsidies for public transit.", "subsidy is money given as part of the cost of something, to help or encourage it to happen:", "Related words to subsidy are grant, allowance and scholarship", "Words which are often used in combination with subsidy are agriculture subsidy, annual subsidy and cash subsidy", "subsidy originates from the latin word, subsidium, which means to reserve troops, support, and assistance"),
    new Vocab(8, "feasible", "looking for a feasible way to create new jobs", "feasible means to be possible or capable to do something successfully", " syonyms to feasible are achievable, doable and possible", " antonyms for feasible are hopeless, impossible and undoable", "Feasible comes from faire, the French verb meaning, to do"),
    new Vocab(9, "name", "sen", "mean", "h1", "h2", "h3"),
    new Vocab(10, "alleged", "She allegedly stole the money, but we do not have evidence", "alleged means to be accused but not proven or convicted", "Synonyms for alleged are assumed, presumed and unproven", "Antonyms for alleged are actual, factual and real", "Alleged comes from the Latin word, allegare, which means to bring forth. to allege was therefore used to describe making a formal declaration in court"),
    new Vocab(11, "adverse", "This warning message causes no adverse impacts to end users, and can be ignored.", "adverse means to be harmful or likely to cause problems", "Synonyms for adverse are disadvantageous, hostile and negative", "Antonyms for adverse sind advantageous, favorable and positive", "adverse comes from the latin word, adversus, which means to turn toward, facing opposed"),
    new Vocab(12, "detrimental", "Former President Donald Trump was scheduled to hold a press conference today, but canceled after advisers warned the event could be detrimental to him and other Republicans", "detrimental means an undesirable or harmful person or thing", " Synonyms for detrimental are bad, damaging and harmful", "Antonyms for detrimental are harmless, hurtless and inoffensive", "detrimental comes from the latin word, detere, which means to weaken or impair"),
    new Vocab(13, "quaint", "The antique shop was full of quaint things.", "quaint means to be attrectively unusual or old-fashioned", "Synonyms for quaint are bizarre, crazy and funky", "Antonyms for quaint are average, ordinary and typical", "quaint comes from the latin word cognitus, of cognoscere, which means to know"),
    new Vocab(14, "endow", "People think Jefferson was endowed with great wisdom. or, The state of Michigan has endowed three institutes", "Endow means to provide something freely or naturally or to give a large amount of money to pay for example for a college or hospital", "If someone or something is endowed with a particular quality or feature, the person or thing naturally has that quality or feature", "Synonyms for endow are to bless, favor or gift", "Antonyms for endow are dispossess, deplete or drain"),
    new Vocab(15, "serene", "Earth is still there, peaceful and serene as ever.", "serene means calm and peaceful", "serene comes from the latin word, serenus, which means clear, cloudless or troubles", "Synonyms for serene are calm, peaceful and quiet", "Antonyms for serene are loud, noisy and tumultuous"),
    new Vocab(16, "deter", "High prices deter many young people from entering the property market.", "To deter means to prevent someone from doing something or to make someone less enthusiastic about doing something by making it difficult for that person to do it or by threatening bad results if they do it", "to deter comes from the latin word, terrere, which means to frighten", "Antonyms for deter are encourage or persuade", "Synonyms for deter are discourage, dissuade or inhibit"),
    new Vocab(17, "scrutiny", "The government's record will be subjected to come under scrutiny in the weeks before the election", "scrutiny means a careful and detailed examination of something in order to get information about it", "scrutiny comes from the latin word, scrutinum, which means to search or examine", "Synonyms for scrutiny are checkup, examination or inspection", "Antonyms for scrutiny are glance, glimpse or peek"),
    new Vocab(18, "famine", "Because of the food shortage, the area was plagued by famine", "famine means a situation in which there is not enough food for a great number of people, causing illness and death, or a particular period when this happens", "famine comes from the latin word, fames, which means hunger or starvation", "Synonyms for famine are drought or deficiency", "Antonyms for famine are abundance, plenty or sufficiency"),
    new Vocab(19, "adjacent", "The other group is meeting in the adjacent room", "adjacent means being close or near, having a common endpoint or border", "Synonyms for adjacent are bordering, touching or joining", "Antonyms for adjacent are apart, detached or disconnected", "adjacent comes from the latin word, adjacere, which means to lie near, to border on"),
    new Vocab(20, "surplus", " There is a surplus of workers and not enough jobs.", "surplus is an amount that is more than needed", "surplus comes from the latin word superplus, which combines super and plus, which means more", "Synonyms for surplus are excess or overflow", "Antonyms for surplus are undersupply, deficit or insufficiency"),
    new Vocab(21, "braggadocio", "his braggadocio hid the fact that he felt personally inadequate", "braggadocio means empty boasting, an arrogant pretension or cockiness", "braggadocio comes from to boast, to brag", "The English poet Edmund Spenser originally created Braggadocio as a personification of boasting", "Related words to braggadocio are self advertiser, self-dramatizer and self-promoter"),
    new Vocab(22, "pule ", "a distressed baby pules in its crib", "pule means to whimper or whine, as a sick or fretful child does", "Used in situations where a child is crying as it is sick.", "Related words to pule are sniffle, cry, squeak or groan", "Antonyms for pule are scream, scraech or wail"),
    new Vocab(23, "sparge", "The sample and reagent mixture is sparged with a carrier gas", "sparge means to sprinkle or spray and can be defined as to agitate by means of compressed air or gas entering through a pipe", "Synonyms for sparge are sprinkle or spray", "sparge comes from the latin word, spargere, which means to scatter", "Sparge is used in the context of beer making, where mash is sparged, which means spraying with hot water to extract the wort"),
    new Vocab(24, "captious", "A captious eater always complains about the food no matter what", " CAPTIOUS suggests a readiness to detect trivial faults or raise objections on trivial grounds", "A captious individual is one who might also be dubbed hypercritical, the sort of carping, censorious critic only too ready to point out minor faults and raise objections on trivial grounds", "Arguments labeled captious are likely to capture a person; they often entrap through subtly deceptive reasoning or trifling points", "Synonyms for captious are critical, faultfinding, hypercritical, judgmental or overcritical"),
    new Vocab(25, "bibulous", " special drying cloths that are so bibulous that they can absorb 10 times their weight in water", "bibulous means highly absorbent, or fond of alcoholic baverages, addicted to drink", "bibulous comes from the latin word, bibere, which means to drink", "Synonyms for bibulous are absorbent, spongy or thirsty", "an antonym to bibulous is nonabsorbent"),
    new Vocab(26, "embonpoint", "A person who is sufficiently fat so as to have a pleasing fullness of figure is embonpoint like a chubby child", "embonpoint means a plumpness of a person which is sufficient to be pleasant", "embonpoint comes from the the french phrase, en, bon, point, which means, in good condition", "Synonyms for embonpoint are plumpness or roundness", "Antonyms for embonpoint are leanness, slimness or thinness"),
    new Vocab(27, "tenebrous", "It's a tenebrous night with no moon", "tenebrous means shut off from the light, gloomy, shadowy or dark", "tenebrous comes from the latin word, tenebrae, which means darkness", "Synonyms for tenebrous are dark or obscure", "Antonyms for tenebrous are bright or illuminated"),
    new Vocab(28, "parlay", "She parlayed fivethousand dollars and years of hard work into a multimillion-dollar company.", "parlay means to to use or develop money, skills, etc. in a way that makes more money or leads to success", "In gambling, parlay is used for a series of bets in which a person places a bet, then puts the original stake of money and all of its winnings on new wagers", "Synonyms are to amplify, boost or maximize", "Antonyms for parlay are to shorten, compress or decrease"),
    new Vocab(29, "legerdemain", "He displays legerdemain with cards and coins", "legerdemain means deceitful, cleverness, trickery as well as any artful trick", "In Middle French, folks who were clever enough to fool others with fast-fingered illusions were described as leger de main, literally meaning light of hand", "In modern times, a feat of legerdemain can even be accomplished without using your hands, as in, for example, an impressive bit of financial legerdemain", "Synonyms for legerdemain are hocus-pocus or magic"),
    new Vocab(30, "deracinate", "The plants were deracinated so they wouldn't grow again", "deracinate means to pull up plants by their roots as well as forcibly remove the racial or ethnic characteristics or influences from a person", "can be traced back to the Latin word radix, meaning root. Although deracinate began life referring to literal plants roots, it quickly took on a second, metaphorical, meaning suggesting removal of anyone or anything from native roots or culture", "Synonyms for deracinate are uproot or root out", "Antonyms for deracinate are to build, create or construct")
];


introS.addEventListener("click",function(){
    playUtterance(Config.INTRO_SYSTEM);
});

introS2.addEventListener("click",function(){
    playUtterance(Config.INTRO_SYSTEM2);
});

introU.addEventListener("click",function(){
    playUtterance(Config.INTRO_USER);
});

notDefined.addEventListener("click",function(){
    playUtterance(Config.NOT_DEFINED);
});
helpBtn.addEventListener("click",function(){
    playUtterance(Config.CAN_I_HELP);
});
optionsSystem.addEventListener("click",function(){
    playUtterance(Config.OPTIONS_SYTEM);
});
optionsSystem2.addEventListener("click",function(){
    playUtterance(Config.OPTIONS_SYTEM2);
});
optionsUser.addEventListener("click",function(){
    playUtterance(Config.OPTIONS_USER);
});
furtherhelp.addEventListener("click",function(){
    playUtterance(Config.FURTHER_HELP);
});
createSentence.addEventListener("click",function(){
    playUtterance(Config.REQUEST_SENTENCE);
});
pronounceWord.addEventListener("click",function(){
    playUtterance(Config.REQUEST_PRONUNCIATION);
});
createMeaning.addEventListener("click",function(){
    playUtterance(Config.REQUEST_MEANING);
});
nextWord.addEventListener("click",function(){
    playUtterance(Config.NEXT_WORD);
});
correct.addEventListener("click",function(){
    playUtterance(Config.CORRECT);
});
incorrect.addEventListener("click",function(){
    playUtterance(Config.INCORRECT);
});
outro.addEventListener("click",function(){
    playUtterance(Config.OUTRO);
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
    msg.rate = 0.95;
    msg.voice = voices[6]; //4 female 6 male
    console.log(msg);
    synth.speak(msg);
    
}




