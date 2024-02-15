function addClass(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function hideClass(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//for a random alpabet
function randomAlphabet(){
     // get or create an alphabet array
    const alphabets = 'qwertyuiopasdfghjklzxcvbnm';
    const alpabetArray = alphabets.slice('');
     //get a random index 0-25
    const ranNumber = Math.random()*25;
    const index = Math.round(ranNumber);
    //get alphabet holding by index
    const alphabet = alpabetArray[index];
    return alphabet;
}
//for score
function scoreHoldElement(elementId){
   const element =  document.getElementById(elementId);
   const currentScoreText = element.innerText;
   const currentScore = parseInt(currentScoreText);
   return currentScore;
}
function scoreUpdate(elementId,value){
    const element =  document.getElementById(elementId);
    element.innerText = value;
}