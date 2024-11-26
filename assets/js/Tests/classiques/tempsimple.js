let terminaisons = [
    "present" = [
        ["e","es","e","ons","ez","ent"],
        ["is","is","it","issons","issez","issent"],
        ["s","s","t","ons","ez","ent"]
    ],
    "imparfait" = [
        ["ais","ais","ait","ions","iez","aient"],
        ["ais","ais","ait","ions","iez","aient"],
        ["ais","ais","ait","ions","iez","aient"]
    ],
    "futur" = [
        ["erai","eras","era","erons","erez","eront"],
        ["irai","iras","ira","irons","irez","iront"],
        ["rai","ras","ra","rons","rez","ront="]
    ],
    "passe" = [
        ["ai","as","a","âmes","âtes","èrent"],
        ["is","is","it","îmes","îtes","irent"],    
        ["is","is","it","îmes","îtes","irent"],
        ["us","us","ut","ûmes","ûtes","urent"],
        ["ins","ins","int","înmes","întes","inrent"]
    ],
    "conditionnel" = [
        ["erais","erais","erait","erions","eriez","eraient"],
        ["irais","irais","irait","irions","iriez","iraient"],
        ["rais","rais","rait","rions","riez","raient"]
    ],
    "imperatif" = [
        ["e","ons","ez"],
        ["is","issons","issez"],
        ["s","ons","ez"]
    ]
]





function getTerminaison(tp,grp,prsn) {
    console.log(terminaisons[tp][grp-1][prsn-1])
}

getTerminaison("imparfait",1,3)