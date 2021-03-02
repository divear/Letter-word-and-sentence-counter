
function CountWords(){

    let Words = document.getElementById("textArea").value;

    let Splitted = Words.split(" ");
    let WordNumber = Splitted.length;

    let TheDisplayer = document.getElementById("WordCountText").innerHTML = WordNumber


    let LetterNumber = Words.length;

    

    document.getElementById("LetterCountShower").innerHTML = LetterNumber


    let Sentenced = Words.split(".");
    let SentenceNumber = Sentenced.length;
    let TheSentenceDisplayer = document.getElementById("SentenceCountShower").innerHTML = SentenceNumber
   




};
