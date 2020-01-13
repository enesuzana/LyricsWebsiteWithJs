// -- USED TO MAKE ALL INPUTS/OTHER OBJECTS FROM JS 
function createElement(tagName, attrs, appendTo) {
    "use strict";
    var element = document.createElement(tagName);

    for (var attr in attrs) {
        if (!attrs.hasOwnProperty(attr)) continue;

        switch (attr) {
            case 'textContent':
            case 'innerHTML':
                element[attr] = attrs[attr];
                break;

            default:
                element.setAttribute(attr, attrs[attr]);
                break;
        }
    }

    if (appendTo) appendTo.appendChild(element);
    return element;
}

// --------- ELEMENTS CREATION FROM JS ---------

// Create form element
var form = createElement('form', {
    id: 'form-general',
    class: 'main-body',
    style: 'padding: 2px 2px 2px 2px;margin-top: 16px;'
});

// Create email element
var formGrup = createElement('div', {
    class: 'form-group',
});

var emailLabel = createElement('label', {
    for: 'Email',
    textContent: 'Email'
}, formGrup);

var email = createElement('input', {
    type: 'email',
    id: 'emailId',
    class: 'inputs',
    placeholder: 'Enter email'
}, formGrup);

form.appendChild(formGrup);

// Create username element
var formGrup = createElement('div', {
    class: 'form-group',
});

var usernameLabel = createElement('label', {
    for: 'Username',
    textContent: 'Username'
}, formGrup);

var username = createElement('input', {
    type: 'username',
    id: 'usernameId',
    class: 'inputs',
    placeholder: 'Enter username'
}, formGrup);

form.appendChild(formGrup);

// Create password element
var formGrup = createElement('div', {
    class: 'form-group',
});

var passwordLabel = createElement('label', {
    for: 'Password',
    textContent: 'Password'
}, formGrup);

var password = createElement('input', {
    type: 'password',
    id: 'passwordId',
    class: 'inputs',
    placeholder: 'Enter password'
}, formGrup);

form.appendChild(formGrup);

// Create age range element
var formGrup = createElement('div', {
    class: 'form-group',
});

var rangeLabel = createElement('label', {
    for: 'Range',
    textContent: 'Age'
}, formGrup);

var range = createElement('input', {
    type: 'range',
    id: 'rangeId',
    placeholder: 'Select age',
    min: '18',
    max: '24'
}, formGrup);

form.appendChild(formGrup);

// Create select userType element
var formGrup = createElement('div', {
    class: 'form-group',
})

var userTypeLabel = createElement('label', {
    for: 'usertype',
    textContent: 'What are you? '
}, formGrup);

var usertype = createElement('select', {
    id: 'selectId',
    class: 'inputs'
});

// -- STRUCTURI DE DATE --
// Add options to select
var options = [];

options.push(createElement('option', {
    textContent: 'User'
}));

options.push(createElement('option', {
    textContent: 'Company'
}));

options.push(createElement('option', {
    textContent: 'Nobody'
}));

options.forEach((op) => {
    usertype.appendChild(op);
});

formGrup.appendChild(userTypeLabel);
formGrup.appendChild(usertype);
form.appendChild(formGrup);

// Create radio button
form.appendChild(createElement('p', {
    textContent: "Choose how many songs"
}));
var label, radio;
label = document.createElement('label');
radio = document.createElement('input');
radio.setAttribute('type', 'radio');
label.appendChild(radio);
label.appendChild(document.createTextNode("Do you want to be premium?"));
form.appendChild(label);



// Create checkbox element
var formGrup = createElement('div', {
    class: 'form-group'
});

var link = createElement('a', {
    textContent: 'conditions',
    href: 'https://laborator-fmi-web.educationhost.cloud/pages/ProiectJS.html'
});

var checkboxLabel = createElement('label', {
    for: 'checkbox',
    textContent: 'Do you agree with our '
});

checkboxLabel.appendChild(link);

var checkbox = createElement('input', {
    type: 'checkbox',
    id: 'checkboxId',
    class: 'inputs'
});

formGrup.appendChild(checkboxLabel);
formGrup.appendChild(checkbox);
form.appendChild(formGrup);

// Create submit button element
var submit = createElement('button', {
    type: 'button',
    id: 'submit',
    textContent: 'Submit'
}, form);

document.getElementsByClassName('gallery')[0].setAttribute('class', 'main-body');
document.getElementsByClassName('gallery-text')[0].appendChild(form);


// Change opacity for submit button and enable when checkbox is checked
document.getElementById('checkboxId').addEventListener('change', function() {
    "use strict";
    if (this.checked) {
        submit.setAttribute("style", "opacity: 1;");
        submit.disabled = false;
        submit.onmouseover = function() {
            submit.style.cursor = "allowed";
        };
    } else {
        submit.setAttribute("style", "opacity: 0.5;");
        submit.setAttribute('disabled', 'disabled');
        submit.onmouseover = function() {
            submit.style.cursor = "not-allowed";
        };
    }
});

// CHANGE SUBMIT ATTRIBUTES WHEN CHECKBOX CHECKED
var checkboxEvent = document.addEventListener('load', function() {
    "use strict";
    submit = document.getElementById('submitId');
    if (this.checked) {
        submit.setAttribute("style", "opacity: 1;");
        submit.disabled = false;
        submit.onmouseover = function() {
            submit.style.cursor = "allowed";
        };
    } else {
        submit.setAttribute("style", "opacity: 0.5;");
        submit.setAttribute('disabled', 'disabled');
        submit.onmouseover = function() {
            submit.style.cursor = "not-allowed";
        };
    }
});

// --------- VALIDATIONS ---------

// real time validation of the input fields
function validateInput(element, format) {
    "use strict";
    if (element.value == "") {
        alert("Error: " + element.type + " is empty!");
        element.focus();
        return false;
    }

    if (element.value.match(format)) {
        element.focus();
        element.setAttribute("style", "border: 2px solid green;");
        return true;
    }
    element.focus();
    element.setAttribute("style", "border: 1px solid red;");
    return false;
};
// User type validation

usertype.onchange = function() {
    "use strict";
    if (usertype.selectedIndex > 0) {
        return true;
    }
    alert('First option was selected');
    return true;
};

function validateCheckbox() {
    if (checkbox.checked) {
        return true;
    }
    alert("The checkbox IS NOT checked");
    return false;
};

// CHECK RADIO BUTTON
var checkRadio = false;

function uncheckRadio(radio) {
    radio.checked = false;
};

radio.addEventListener('click', function() {
    "use strict";
    if (this.checked && !checkRadio) {
        alert("You selected premium");
        checkRadio = true;
        return true;
    }
    uncheckRadio(radio);
    checkRadio = false;
    return false;
});
// check options
const checkSelect = (field) => {
    let retval = [];
    for (let el of field.selectedOptions) {
        retval.push({
            value: el.value,
            text: el.text
        });
    }
    return (field.multiple) ? retval : retval[0];
};

// -- REGEX --

// Form validation
const emailFormat = /^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9]*)\.)+[a-zA-Z]+$/;
const usernameFormat = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
const passwordFormat = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!#$&_*?^{}~-])[a-zA-Z!#$&_*?^{}~-]{8,}/;

// VALIDATE INPUTS IN REAL TIME, change to greenColor if valid
email.oninput = function() {
    validateInput(this, emailFormat);
};

username.oninput = function() {
    validateInput(this, usernameFormat);
};

password.oninput = function() {
    validateInput(this, passwordFormat);
};

// FUNCTION TO CHECK FORM FIELDS
function checkForm(form) {
    "use strict";
    // validate email
    if (!validateInput(email, emailFormat)) {
        console.log("Email invalid");
        return false;
    }
    // validate username
    if (!validateInput(username, usernameFormat)) {
        console.log("Username invalid");
        return false;
    }
    // validate password
    if (!validateInput(password, passwordFormat)) {
        console.log("Pass invalid");
        return false;
    }
    // validate checkbox
    if (!validateCheckbox) {
        return false;
    }
    alert('Good!');
    return true;
};

function createWelcomePage() {
    "use strict";
    document.getElementsByClassName('gallery-text')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.getElementsByClassName('gallery-text')[0].style.display = 'none';
    // color picker element
    var script = document.createElement('script');
    script.src = 'jscolor.js';
    document.body.appendChild(script);
    var colorPicker = createElement('input', {
        class: 'jscolor',
        value: 'ab2567',
        width: '50px',
        style: 'margin-left:5px; border-radius: 4px; font-size: 15px; text-align:center;'
    });
    // done color picker
    var mainDiv = document.getElementsByClassName('gallery-image')[0];
    var welcomeDiv = document.createElement('div');

    // welcome text
    welcomeDiv.setAttribute('id', 'welcome');
    createElement('h1', {
        textContent: 'Welcome, ' + JSON.parse(localStorage.getItem('user')).username + " !"
    }, welcomeDiv);
    mainDiv.prepend(welcomeDiv);

    // -- BACKGROUND SETTINGS CHANGE --
    createElement('h3', {
        textContent: 'Set your background color ^.^',
        id: 'textContent',
        style: 'margin-left:5px; '
    }, welcomeDiv);

    mainDiv.firstChild.appendChild(colorPicker);
    // CHANGE BG COLOR WITH CHOSEN COLOR
    colorPicker.addEventListener('change', function() {
        document.body.style.backgroundColor = '#' + this.value;
    }, false)

    // DELETE BUTTON TO CLEAR LOCAL STORAGE
    var logDelete = document.createElement("button");
    logDelete.appendChild(document.createTextNode("Stergeti datele de logare"));
    mainDiv.appendChild(logDelete);
    logDelete.addEventListener('click', function() {
        window.localStorage.clear();
        document.getElementById('welcome').setAttribute("style", "display:none;");
        document.getElementById('form-general').setAttribute("style", "display:block;");
        document.getElementsByClassName('gallery-text')[0].setAttribute("style", "display:block;");
    })
};

// -- SUBMIT LOGIN FORM LISTENER --
submit.addEventListener('click', function() {
    if (checkForm(form)) {
        alert('congrats, checkfrom corect');
        // hide form
        document.getElementById('form-general').setAttribute("style", "display:none;");
        // hide animations
        var divWelcome = document.createElement('div');
        var mainDiv = document.getElementsByClassName('main-body')[0];
        mainDiv.appendChild(divWelcome);
        var animations = document.getElementsByClassName('animation');
        for (var anim in animations) {
            animations[anim].style = 'display:none;'
        }
        // change image
        img = document.getElementsByTagName("img")[0];
        img.src = 'topImg.png';

        // local storage
        const user = {
            email: email.value,
            username: username.value,
            usertype: usertype.value,
            premium: radio.checked,
        }
        window.localStorage.setItem('user', JSON.stringify(user));
        // add some more elements
        createWelcomePage();
    }
});

// On Load make submit button unavailable
window.onload = function() {
    submit.setAttribute("style", "opacity: 0.5;");
    submit.setAttribute('disabled', 'disabled');
    checkbox.checked = false;
    submit.onmouseover = function() {
        submit.style.cursor = "not-allowed";
    };
};

// -- AUDIO ELEMENT - DINAMIC --
var divv = createElement('div', {
    id: 'audioDiv',
    class: 'form-group',
    style: 'padding:10.5px;'
});
var audio = createElement('audio', {
    controls: 'true',
    id: 'myAudio',
    autoplay: 'true'
});

createElement('source', {
    src: 'waterfountain.mp3',
    type: 'audio/mpeg'
}, audio);

divv.appendChild(audio);
createElement('button', {
    textContent: 'Play music ',
    id: 'audioPlay',
    style: 'padding:10.5px;'
}, divv);

var mBody = document.getElementsByClassName('main-body')[0];
mBody.appendChild(divv);

// Click button to play it or stop it
var tryIt = false;
document.getElementById('audioPlay').onclick = function() {
    if (tryIt) {
        document.getElementById('myAudio').pause();
        this.textContent = 'Play music';
        tryIt = false;
        return false;
    }
    document.getElementById('myAudio').play();
    this.textContent = 'Stop music';
};