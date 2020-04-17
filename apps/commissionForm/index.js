/* jshint esversion: 6 */


const focusOnNameInput = () => {
    // Make sure name is first input since it is required
    const name = document.getElementById('name');
    name.focus();
};

// Action taken when navigating between elements
const blurActions = (event) => {
    let eventId = document.getElementById(`${event.target.name}Check`);
    let validity = event.target.validity;
    let validateId = document.getElementById(`${event.target.name}Validate`);


    if (validity.valueMissing || validity.typeMismatch || validity.patternMismatch) {
        event.target.style.border = 'solid red 2px';
        event.target.focus();
        validateId.innerHTML = event.target.validationMessage;

    } else if (validity.valid) {
        event.target.style.border = '';
        if (eventId) {
            eventId.classList.remove('hide');
        }

        if (validateId) {
            validateId.innerHTML = "";
        }
    }
};


// action taken when focusing or refocusing on an element
const focusAction = (event) => {

    event.target.nextElementSibling.classList.add('hide');

};

// radio button click logic
const radioClick = (event) => {
    let eventId = document.getElementById(`${event.target.name}Check`);

    eventId.classList.remove('hide');

};

const radioFocus = (event) => {

    let validateId = document.getElementById(`${event.target.name}Validate`);

    validateId.innerHTML = event.target.validationMessage;
};

const addEventListeners = () => {

    const inputs = document.querySelectorAll('.required');
    const radios = document.querySelectorAll('input[type="radio"]');
    const submitButton = document.querySelector('.submit');

    // Event Listeners for required text inputs

    inputs.forEach((input) => {
        input.addEventListener('blur', blurActions);
        input.addEventListener('focus', focusAction);

    });


    // Event listeners for radio buttons
    radios.forEach((radio) => {
        radio.addEventListener('click', blurActions);
        radio.addEventListener('blur', blurActions);
        radio.addEventListener('focus', radioFocus);
    });

    // disallow ENTER key to submit form unless on submit button

    window.addEventListener('keydown', function (e) {
        if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
            if (e.target.nodeName == 'INPUT' && e.target.type !== 'submit') {
                e.preventDefault();
                return false;
            }
        }
    }, true);


};


// Active Functions
focusOnNameInput();
addEventListeners();

//For Future updates:

// link to email with PHP script.
// Will need to learn some PHP for this
// see if possible to pull into JS file or how those interact.
// Learn mechanics of this. Will I need to set up a server with Node JS?