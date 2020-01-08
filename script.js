'use strict';

let QL = new QLdev();

let messages = ["javascript", "merry christmas", "new year", "charlie brown", "candy cane", "santa claus", "pine tree", "snowmman", "nativity"];  
let message = messages[Math.floor(Math.random() * messages.length)]; 

let currentMessage = "";
let invalidCount = 0;
let usedChar = [""];
let playing = true;
let exists;

for (let i = 0; i < message.length; i++){
    if (message.charAt(i) == " "){
        currentMessage = currentMessage + " ";
    } else {
        currentMessage = currentMessage + "_";
    } 
} 
$('.word').html(currentMessage);

for (let i = 65; i <= 90; i++){
    document.getElementById(String.fromCharCode(i)).addEventListener("click", (event) =>{
        if (playing == true){
        for (let i = 0; i < usedChar.length; i++){
            if (String.fromCharCode(i).toLowerCase() == usedChar[i]){
                exists = true;
                break;
            } 
        } 
        if (exists != true){
            validLetter(String.fromCharCode(i).toLowerCase());
            QL.changeClass(String.fromCharCode(i).toUpperCase(), "used"); 
            usedChar.push(String.fromCharCode(i).toLowerCase());

            if (currentMessage == message){
                QL.changeAttribute("hangman", "src", "images/win.png");
                $('.win').css('display', 'block');
                playing = false;
            } 
        } 
    } 
    });
} 

document.addEventListener('keypress', (event) => {
    let exists = false;

    if (playing == true){
        for (let i = 0; i < usedChar.length; i++){
            if (event.key.toLowerCase() == usedChar[i]){
                exists = true;
                break;
            } 
        } 
        if (exists != true){
            validLetter(event.key.toLowerCase());
            QL.changeClass(event.key.toUpperCase(), "used"); 
            usedChar.push(event.key.toLowerCase());

            if (currentMessage == message){
                QL.changeAttribute("hangman", "src", "images/win.png");
                $('.win').css('display', 'block');
                playing = false;
            } 
        } 
    } 
}); 

document.getElementById('hangman').addEventListener('click', (event) => {
    console.clear();
    for (let i = 65; i <= 90; i++){
        QL.removeAttribute(String.fromCharCode(i), "class");
    } 
    message = messages[Math.floor(Math.random() * messages.length)];
    currentMessage = "";
    invalidCount = 0;
    usedChar = [""];
    playing = true;
    console.log("Winning Message: " + message); 
    QL.changeAttribute("hangman", "src", "images/hang0.png");
    $('.word').html("");
    $('.win').css('display', 'none');
    for (let i = 0; i < message.length; i++){
        if (message.charAt(i) == " "){
            currentMessage = currentMessage + " ";
        } else {
            currentMessage = currentMessage + "_";
        } 
    } 
    $('.word').html(currentMessage);
}); 

function validLetter(key){
    let exist;
    for (let i = 0; i < message.length; i++){
        if (key == message.charAt(i)){
            exist = true;
            let newMessage = "";
            for (let i = 0; i < message.length; i++){
                if (currentMessage.charAt(i) != " " && currentMessage.charAt(i) != "_"){
                    newMessage = newMessage + currentMessage.charAt(i);
                } else if (message.charAt(i) == key){
                    newMessage = newMessage + key;
                } else if (message.charAt(i) == " "){
                    newMessage = newMessage + " ";
                } else {
                    newMessage = newMessage + "_";
                } 
            } 
            currentMessage = newMessage;
            $('.word').html(currentMessage);
            break;
        } else {
            exist = false;
        }
    } 
    if (exist == false){
        invalidCount++;
        QL.changeAttribute("hangman", "src", "images/hang" + invalidCount + ".png");
    } 

    if (invalidCount == 6){
        playing = false;
        $('.win').css('display', 'block');
    }
} 