
/*------------------------------------ MESSAGE ARRAY ----------------------------------*/
var affirmation = [
"I forgive myself and set myself free.", 
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
]

var mantra = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."
]

/*---------------------------------------VARIABLES--------------------------------------*/ 
var radioSelection;
var counter = affirmation.length;
var messagesArray = []
var messages;
/*----------------------------------------VIEWS-----------------------------------------*/ 
var messageView = document.querySelector('.budda');
/*---------------------------------------BUTTON ----------------------------------------*/ 
var userClick = document.querySelector('.btn');
var userSelection = document.querySelector('.sle-aff');
var userSecSelection = document.querySelector('.sle-man');
/*----------------------------------------DISPLAY-MESSAGE------------------------------*/
var randomMessage = document.querySelector('#message-display');
var repeatMessage = document.querySelector('.budda-img');
/*--------------------------------------EVENTLISTENERS---------------------------------*/ 
userClick.addEventListener('click', selfCareMessage);
userSelection.addEventListener('click', selfCareSelection);
userSecSelection.addEventListener('click', selfCareMantra);
/*--------------------------------------FUNCTION----------------------------------------*/ 

function selfCareSelection(event) {
    if(event.target.value === 'affirmation') {
        radioSelection = event.target.value;
    }
}

function selfCareMantra(event) {
    if(event.target.value === 'mantra') {
        radioSelection = event.target.value;
    }
}

function selfCareMessage(event) {
   if(radioSelection === 'affirmation') {
        var number = Math.floor(Math.random() * affirmation.length);
    if(affirmation.length > 0 ){
        messages = affirmation[number];
    } else if (affirmation.length <= 0 ) {
        messages = "You will now see repeating messages.";
        affirmation = [
            "I forgive myself and set myself free.", 
            "I believe I can be all that I want to be.",
            "I am in the process of becoming the best version of myself.",
            "I have the freedom & power to create the life I desire.",
            "I choose to be kind to myself and love myself unconditionally.",
            "My possibilities are endless.",
            "I am worthy of my dreams.",
            "I am enough.",
            "I deserve to be healthy and feel good.",
            "I am full of energy and vitality and my mind is calm and peaceful.",
            "Every day I am getting healthier and stronger.",
            "I honor my body by trusting the signals that it sends me.",
            "I manifest perfect health by making smart choices."
            ]
    }
    messageView.style.display = "none";
    randomMessage.innerHTML = messages;
    if(randomMessage.innerHTML != "You will now see repeating messages.") {
        affirmation.splice(number, 1);
    }
   }
    if(radioSelection === 'mantra') {
        number = Math.floor(Math.random() * mantra.length);
    if(mantra.length > 0) {
        messages = mantra[number];
    }
    else if(mantra.length <= 0) {
        messages = "You will now see repeating messages.";
        mantra = [
            "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
            "Don’t let yesterday take up too much of today.",
            "Every day is a second chance.",
            "Tell the truth and love everyone.",
            "I am free from sadness.",
            "I am enough.",
            "In the beginning it is you, in the middle it is you and in the end it is you.",
            "I love myself.",
            "I am present now.",
            "Inhale the future, exhale the past.",
            "This too shall pass.",
            "Yesterday is not today.",
            "The only constant is change.",
            "Onward and upward.",
            "I am the sky, the rest is weather."
        ]
    }
    messageView.style.display = "none";
    randomMessage.innerHTML = messages;
    if(randomMessage.innerHTML != "You will now see repeating messages.") {
        mantra.splice(number, 1);
    }
   }
   if(randomMessage.innerHTML === "You will now see repeating messages.") {
        repeatMessage.classList.add('no-message');
   }
   else {
        repeatMessage.classList.remove('no-message');
   }

   event.preventDefault();
}



