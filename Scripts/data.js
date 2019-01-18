var arr = [
    '0903268809',
    '0902049229',
    '0904220201',
    '0949929785',
    '0973230290',
    '0775288579',
    '0943333933',
    '0977408887',
    '0904233324',
    '0915264262',
    '0984898084',
    '0905608882',
    '0906071118',
    '0904162224',
    '0902101601',
    '0369797000',
    '0819598097',
    '0964953029',
    '0359358889',
    '0963002160',
    '0383594502',
    '0986507822',
    '0375488912',
    '0988610990',
    '0375189459',
    '0904767656',
    '0946963316',
    '0399292877',
    '0945377486',
    '0904826931',
    '0334470074',
    '0974524844',
    '0968717798',
    '0919792456',
    '0947282626',
    '0966676730',
    '0964798888',
    '0987470844',
    '0903226461',
    '0944910707',
    '0949277946',
    '0969182184',
    '0976781667'
];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
arr = shuffle(arr);
console.log(arr);

