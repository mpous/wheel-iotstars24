

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
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlay()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/C4D03AQEm1Nyh4NoSVA/profile-displayphoto-shrink_100_100/0/1516304629303?e=1709769600&v=beta&t=5k1nA3difvNZ2Un1Ha3xkEjvUy5RE6f1PfMH0V-wLAo" alt="IoT Star" class="avatar"><p style="text-align:left;">As a Tool I like to build IoT projects (using Raspberry Pi, Arduino or similar) for experimenting with IoT solutions myself.<br /><br />My routine is to actively seek out new mentors who can provide guidance, share experiences and contribute to my professional growth.</p><br><input id="submitInterestForm" type="submit" value="Let us know if you would like to meet this IoT Star!" onclick="closeChatOverlay()"></div>',
        '<div id="result-modal" class="chat-overlay"><div class="chat-header" style="background-color:'+result+'"><span style="font-size: 14px;color:#FFF;margin-right:30px;">The Tools, Tactics, Habits and Routines of an IoT Star</span><span class="close-button" onclick="closeChatOverlay()" style="margin-left:10px;">&times;</span></div><div class="chat-content"><img src="https://media.licdn.com/dms/image/D5603AQGySvqt8DjJuA/profile-displayphoto-shrink_100_100/0/1679991852902?e=1712188800&v=beta&t=mzB1s5mubdDYpTDTxL0IBgCUojQRHcyMQy-LPsAl334" alt="IoT Star" class="avatar"><p style="text-align:left;">My habit is to stay updated with the latest IoT trends and technologies through continuous learning and professional development every year.<br /><br />My routine is to start every day reviewing current projects, identifying priorities and planning tasks to ensure efficient use of my time.</p><br><input id="submitInterestForm" type="submit" value="Let us know if you would like to meet this IoT Star!" onclick="closeChatOverlay()"></div>'
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
