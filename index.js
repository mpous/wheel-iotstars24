

const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.buttonStart');
const starButton = document.querySelector('.button');
const colorResult = document.getElementById('colorResult');
const root = document.querySelector(":root");
const modal = document.getElementById('iotstars-modal');

let deg = 0;


starButton.addEventListener('click', openModal);

function startButtonClicked(event) 
{
    colorResult.style.display = 'none'
    // Disable button during spin
    starButton.style.pointerEvents = 'none';
    // Set button style
    root.style.setProperty("--linear-shadow", 'linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)');
    // Calculate a new rotation between 3000 and 6000
    deg = Math.floor(3000 + Math.random() * 3000)
    // Set the transition on the wheel
    wheel.style.transition = 'all 8s ease-out'
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`
    // the blur effect to make it look like blurry
    wheel.classList.add('blur')
}

wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    // Enable back the button when spin is over
    starButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none'
    // At this point our degree is obviouly more than 360 as set in line 10. So we need to reset it to a number
    // that is within 360 to have a natural spin.
    const actualDeg = deg %  360
    // Start the next spin from a value less then 360
    wheel.style.transform = `rotate(${actualDeg}deg)`;

    //sending the degree that the marker stoped on
    alertResult(360 - actualDeg)
})

function alertResult(actualDeg) {
    let result = null;
    // Checking the degree and assign result
    if(actualDeg >= 0 && actualDeg <= 30) {
        result = '#aad401';
    }else if(actualDeg > 30 && actualDeg <= 60) {
        result = '#44aa00';
    }else if(actualDeg > 60 && actualDeg <= 90) {
        result = '#2ca089';
    }else if(actualDeg > 90 && actualDeg <= 120) {
        result = '#00aad4';
    }else if(actualDeg > 120 && actualDeg <= 150) {
        result = '#3837c8';
    }else if(actualDeg > 150 && actualDeg <= 180) {
        result = '#5a2ca0';
    }else if(actualDeg > 180 && actualDeg <= 210) {
        result = '#8800aa';
    }else if(actualDeg > 210 && actualDeg <= 240) {
        result = '#ff00cc';
    }else if(actualDeg > 240 && actualDeg <= 270) {
        result = '#ff0066';
    }else if(actualDeg > 270 && actualDeg <= 300) {
        result = '#d40001';
    }else if(actualDeg > 300 && actualDeg <= 330) {
        result = '#ff6601';
    }else if(actualDeg > 330 && actualDeg <= 360) {
        result = '#ffcc01';
    }


    resultTextArray = [
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C4D03AQEm1Nyh4NoSVA/profile-displayphoto-shrink_100_100/0/1516304629303?e=1709769600&v=beta&t=5k1nA3difvNZ2Un1Ha3xkEjvUy5RE6f1PfMH0V-wLAo" alt="IoT Star" class="avatar"><p style="text-align:left;">As a Tool I like to build IoT projects (using Raspberry Pi, Arduino or similar) for experimenting with IoT solutions myself.<br /><br />My routine is to actively seek out new mentors who can provide guidance, share experiences and contribute to my professional growth.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/D5603AQGySvqt8DjJuA/profile-displayphoto-shrink_100_100/0/1679991852902?e=1712188800&v=beta&t=mzB1s5mubdDYpTDTxL0IBgCUojQRHcyMQy-LPsAl334" alt="IoT Star" class="avatar"><p style="text-align:left;">My habit is to stay updated with the latest IoT trends and technologies through continuous learning and professional development every year.<br /><br />My routine is to start every day reviewing current projects, identifying priorities and planning tasks to ensure efficient use of my time.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C4D03AQEyJbpU_4XCQQ/profile-displayphoto-shrink_100_100/0/1574413964403?e=1712188800&v=beta&t=q6ZxdKGOZR0YmhcFrg1Us5iTe1-PhQEPHe_WANljmYo" alt="IoT Star" class="avatar"><p style="text-align:left;">I like to conduct rapid experiments before launching a product or campaign. There are already too many useless IoT services on the market today ;-)<br /><br />Every quarter I spend a full day reviewing whether my goals and priorities are still OK. And when we have a phone conversation, most likely I am walking on the beach.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C4E03AQEkel88WPyD-g/profile-displayphoto-shrink_100_100/0/1616659840281?e=1712188800&v=beta&t=wP-Sym8vSE2ZN3hR0yzWYs_cHiQ2h85jcinJxYuFVKo" alt="IoT Star" class="avatar"><p style="text-align:left;">Tools: Integrate vertically rather than horizontal optimization. Customers want end-2-end solutions and service rather than a jigsaw that they can not solve.<br />Habits: Use common sense and what is readily available rather than hype. If we all jump to convergence, private 5G, Redcap and Satellite now it will be another delay of success 😊.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/D4E03AQEQt1xTvH6unw/profile-displayphoto-shrink_100_100/0/1681862685951?e=1712188800&v=beta&t=Cryialupb_UxL6R3IVxIYE1oHWJ_t9TVfYFByIrzc-8" alt="IoT Star" class="avatar"><p style="text-align:left;">On sales/discovery calls make sure you digging into your customers pain point. There might be active and latent pain but is there economic pain? A good questions to ask ALL your prospects or customers is: if you do not do anything (switch or implement x product) what will happen?<br /><br />In today, economic buying climate, you ca not be a nice to have, you have to be a must have. If the prospect/customer hasnt quantified the $$$ pain, then you are you are not going to sell them.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C5603AQHJkKHv70KIGA/profile-displayphoto-shrink_100_100/0/1516590460317?e=1712188800&v=beta&t=yXi4KfFp7Seh_EDW8a9kS0jwLhbi3Hk4HvzzDwx9Q0A" alt="IoT Star" class="avatar"><p style="text-align:left;">A focus on the business case and product/market fit. There are a lot of traps layered in “what can be done”. For example, FOTA can completely change the design and cost equation of a battery-powered device, so do you really need it? If you have to truck roll 2x/year to replace device batteries is having OTA update really worth it? Maybe, maybe not. The business case should tell you. :)</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C4E03AQESySvy4xu8tA/profile-displayphoto-shrink_100_100/0/1516174636246?e=1712188800&v=beta&t=SzXf7ytHosNt5-Ng3IZytREwZ8tAELkHP6U2cyuSkmA" alt="IoT Star" class="avatar"><p style="text-align:left;">As a knowledge worker and leader of distributed teams, I look at a screen 10-12 hours a day. Sitting or standing still while looking at a screen is as bad as smoking! That’s why we must all find options to look around us and interact with the world and people in proximity. I begin each and every day with approximately two hours of being physically outdoors and moving, often breathing heavily, before I enter my workspace.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/D4E03AQEakU57ZmZyJw/profile-displayphoto-shrink_100_100/0/1671548972794?e=1712188800&v=beta&t=PJ73F7q09SV7TjwdF9b9AAW3y_0t8GdetNY9eTFqBSI" alt="IoT Star" class="avatar"><p style="text-align:left;">Some people say that data is gold, but I do not see it that way. Instead of the mining analogy, I see IoT as more of a quarry analogy; you collect raw data, but then you have to extract business insights from the raw data in order to make it monetizable.<br /><br />Once I know the price I am willing to pay for the insights, I can reverse engineer my way to the right solution. Starting from the customer value makes so much more sense and with a first principles approach I enable innovation on the data collection part of the value chain.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C4D03AQGfzP1lyiCAsg/profile-displayphoto-shrink_100_100/0/1557136161112?e=1712188800&v=beta&t=jEYtz-CXaq3kvb8Af-ZlmiNrPfjezDBQFWs4yMeRrGs" alt="IoT Star" class="avatar"><p style="text-align:left;">Developers are at the heart of IoT. Developer Relations (DevRel) is what I help you excel in. Evaluate & enhance developers experience with your IoT technology, strenghten your developer marketing, build up and energize a developer community, and much more...</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlayX()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C4E03AQEYyXciEzvurA/profile-displayphoto-shrink_100_100/0/1656665420452?e=1712793600&v=beta&t=59S7rrmo1BeayYQWhQFPVkmZkQBp0v6NIEUnA0bxaVg" alt="IoT Star" class="avatar"><p style="text-align:left;">Go for a run early in the morning to fully wake up, get and endorphin shot before breakfast and get excited about the day.<br>Create a list of daily to-dos and share it with the rest of the team on a dedicated slack channel.<br>Play binaural sounds on Spotify while working to block out outside noise.</p><br><input id="submitInterestForm" type="submit" value="Spin the wheel again and meet more IoT Stars!" onclick="closeChatOverlay()"><br /><a class="blockrain-btn blockrain-game-over-btn" href="https://www.eventbrite.es/e/iot-stars-mwc-2024-tickets-747620050697" target="_blank">Join IoT Stars MWC</a></div>'
    ];
        

    resultText = getRandomHtml(resultTextArray);


    // Displaying result
    colorResult.style.display = 'block';
    colorResult.style.color = result;
    colorResult.style.fontWeight = 'bold';
    colorResult.style.fontSize = '30px';
    colorResult.innerHTML = resultText;
    colorResult.style.position = 'absolute';
    colorResult.style.transform = 'translateX(-50%)';
    colorResult.style.left = '50%';
    colorResult.style.marginTop = '46.5%';
    // Set button style
    root.style.setProperty("--linear-shadow", result);

}

function getRandomHtml(htmlArray) 
{
    // Get a random index from the htmlArray
    const randomIndex = Math.floor(Math.random() * htmlArray.length);

    // Display the selected HTML on the page
    return htmlArray[randomIndex];
}


// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

function closeChatOverlay() {
    document.getElementById('result-modal').style.display = 'none';

    startButtonClicked();
}

function closeChatOverlayX() {
    document.getElementById('result-modal').style.display = 'none';

}


// Function to handle form submission

function submitForm() {
    isValid = false;
    //isValid = validateForm();

    isValid = true;

    if (isValid)
    {
        const yourForm = document.getElementById('myForm');

        const data = new FormData(yourForm);
        const action = "https://script.google.com/macros/s/AKfycby_PMgg35rNlV-vFKqKDHpMgOp5mAD5aWgdnrbe2eaHvrkxcxZHgIQ2VLhobvR8_ztL/exec";
  
        // Close the modal after submission
        closeModal();

        fetch(action, {
            method: 'POST',
            body: data,
        }).then(() => {
            
                // Perform any necessary form processing here
                startButtonClicked();
        })
    }
    
}




function validateForm() {
    // Reset previous error messages
    resetErrorMessages();

    let isValid = true;

    // Basic email validation
    const emailInput = document.getElementById('Email');
    const emailError = document.getElementById('emailError');
    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid e-mail address';
        isValid = false;
    }

    // Basic LinkedIn URL validation
    /*
    const linkedinInput = document.getElementById('Linkedin');
    const linkedinError = document.getElementById('linkedinError');
    if (!isValidLinkedinUrl(linkedinInput.value)) {
        linkedinError.textContent = 'Invalid LinkedIn Profile URL';
        isValid = false;
    }


    // Additional form field validations go here
    const messageInput = document.getElementById('Routines');
    const messageError = document.getElementById('routinesError');
    if (!messageInput.value.trim()) {
        messageError.textContent = 'Message cannot be empty';
        isValid = false;
    }
    */

    if (isValid) {
        // Additional form processing logic goes here

        //alert('Form submitted successfully!');
    }

    return isValid;
}

function resetErrorMessages() {
    // Reset all error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('linkedinError').textContent = '';
    document.getElementById('routinesError').textContent = '';
}

function isValidEmail(email) {
    // Basic email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidLinkedinUrl(url) {
    // Basic LinkedIn URL validation using a simple regular expression
    const linkedinRegex = /^(https:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    return linkedinRegex.test(url);
}
