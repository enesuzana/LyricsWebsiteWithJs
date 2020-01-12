// Script

function createElement(tagName, attrs, appendTo) {
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

var hex1 = 239;
var hex2 = 194;
var hex3 = 224;
var headerText = document.getElementsByClassName('header')[0].getElementsByTagName('h1')[0];
headerText.style.textShadow = "1px 1px 1px #391326";
headerText.setAttribute('style', 'animation:pop 1s ease-in-out;');

function fadetext() {
    if (hex1 > 182) { //If color is not black yet
        hex1 -= 5; // increase color darkness
        hex2 -= 20;
        hex3 -= 11;
        headerText.style.color = "rgb(" + hex1 + "," + hex2 + "," + hex3 + ")";
        setTimeout("fadetext()", 80);
    } else {
        hex1 = 224;
        hex2 = 133;
        hex3 = 194;
    }
}

window.onload = function() {
    submit.setAttribute("style", "opacity: 0.5;");
    submit.setAttribute('disabled', 'disabled');
    checkbox.checked = false;
    submit.onmouseover = function() {
        submit.style.cursor = "not-allowed";
    };

    // set a random image as header image 
    document.getElementsByClassName('header')[0].setAttribute('id', 'header');
    var header = document.getElementById('header');
    var pictures = new Array('https://i.pinimg.com/originals/8b/61/c1/8b61c154e7f44146727a32c05a7539d9.gif',
        'https://i.pinimg.com/originals/4c/8e/26/4c8e267ee4446e733bb17564337083f7.jpg',
        'https://i0.wp.com/windowscustomization.com/wp-content/uploads/2018/10/cyberpunk-night-city.gif?fit=750%2C364&quality=80&strip=all&ssl=1',
        'http://s13.favim.com/orig/160531/anime-scenery-gif-anime-gifs-Favim.com-4364443.gif',
        'https://i.pinimg.com/originals/76/90/8b/76908b09072332bd62e7cf92b3042dd2.gif',
        'https://data.whicdn.com/images/319359512/original.gif',
        'https://i.pinimg.com/originals/05/59/3e/05593e925e651314820bbb215b223a5f.jpg'
    );
    var numPics = pictures.length;
    if (document.images) {
        var chosenPic = Math.floor((Math.random() * numPics));
        header.style.backgroundSize = 'cover';
        header.style.backgroundRepeat = 'no-repeat';
        header.style.backgroundPosition = 'center center';
        header.style.backgroundImage = 'url(' + pictures[chosenPic] + ')';
    }
    var div = document.createElement('div');
    div.setAttribute('class', 'popText');
    header.appendChild(div);
    div.setAttribute('style', 'animation:pop 1s ease-in-out; animation-delay:0.2s;');
    div.style.textShadow = "5px 5px 1px #9900ff, 10px 10px 1px #ff4d94";
    div.appendChild(document.getElementsByTagName('p')[0]);
    fadetext();
}


// Create form element
var form = createElement('form', {
    id: 'form-general'
});

// Create email element
var formGrup = createElement('div', {
    class: 'form-group',
})

var emailLabel = createElement('label', {
    for: 'Email',
    textContent: 'Email'
});

var email = createElement('input', {
    type: 'email',
    id: 'emailId',
    class: 'inputs',
    placeholder: 'Enter email'
})

formGrup.appendChild(emailLabel);
formGrup.appendChild(email);
form.appendChild(formGrup);

// Create username element
var formGrup = createElement('div', {
    class: 'form-group',
})

var usernameLabel = createElement('label', {
    for: 'Username',
    textContent: 'Username'
});

var username = createElement('input', {
    type: 'username',
    id: 'usernameId',
    class: 'inputs',
    placeholder: 'Enter username'
})

formGrup.appendChild(usernameLabel);
formGrup.appendChild(username);
form.appendChild(formGrup);

// Create password element
var formGrup = createElement('div', {
    class: 'form-group',
})

var passwordLabel = createElement('label', {
    for: 'Password',
    textContent: 'Password'
});

var password = createElement('input', {
    type: 'password',
    id: 'passwordId',
    class: 'inputs',
    placeholder: 'Enter password'
})

formGrup.appendChild(passwordLabel);
formGrup.appendChild(password);
form.appendChild(formGrup);

// Create age range element
var formGrup = createElement('div', {
    class: 'form-group',
})

var rangeLabel = createElement('label', {
    for: 'Range',
    textContent: 'Age'
});

var range = createElement('input', {
    type: 'range',
    id: 'rangeId',
    placeholder: 'Select age',
    min: '18',
    max: '24'
})

formGrup.appendChild(rangeLabel);
formGrup.appendChild(range);
form.appendChild(formGrup);

// Create select userType element
var formGrup = createElement('div', {
    class: 'form-group',
})

var userTypeLabel = createElement('label', {
    for: 'usertype',
    textContent: 'What are you? '
});

var usertype = createElement('select', {
    id: 'selectId',
    class: 'inputs',
})

// Add options to select
var options = [];

options.push(createElement('option', {
    textContent: 'User'
}))

options.push(createElement('option', {
    textContent: 'Company'
}))

options.push(createElement('option', {
    textContent: 'Nobody'
}))

options.forEach((op) => {
    usertype.appendChild(op);
})

formGrup.appendChild(userTypeLabel);
formGrup.appendChild(usertype);
form.appendChild(formGrup);

// Create radio button
form.appendChild(createElement('p', {
    textContent: "Choose how many songs"
}))
var label, radio;
label = document.createElement('label');
radio = document.createElement('input');
radio.setAttribute('type', 'radio');
label.appendChild(radio);
label.appendChild(document.createTextNode("Do you want to be premium?"));
form.appendChild(label);



// Create checkbox element
var formGrup = createElement('div', {
    class: 'form-group',
})

var link = createElement('a', {
    textContent: 'conditions',
    href: 'https://laborator-fmi-web.educationhost.cloud/pages/ProiectJS.html'
})

var checkboxLabel = createElement('label', {
    for: 'checkbox',
    textContent: 'Do you agree with our '
});

checkboxLabel.appendChild(link);

var checkbox = createElement('input', {
    type: 'checkbox',
    id: 'checkboxId',
    class: 'inputs',
})

formGrup.appendChild(checkboxLabel);
formGrup.appendChild(checkbox);
form.appendChild(formGrup);

// Create submit button element
var submit = createElement('button', {
    type: 'button',
    id: 'submit',
    textContent: 'Submit'
})
form.appendChild(submit);


document.getElementsByClassName('gallery-text')[0].appendChild(form);


// Event listeners

// Change opacity for submit button and enable when checkbox is checked
checkbox.addEventListener('change', function() {
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
})

// VALIDATIONS

function validateInput(element, format) {
    if (element.value == "") {
        alert("Error:" + toString(element.type) + " is empty!");
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
}
// User type validation

usertype.onchange = function() {
    if (usertype.selectedIndex > 0) {
        return true;
    }
    alert('First option was selected');
    return true;
}

function validateCheckbox() {
    if (checkbox.checked) {
        return true;
    }
    alert("The checkbox IS NOT checked");
    return false;
}


var checkRadio = false;

function uncheckRadio(radio) {
    radio.checked = false;
}

radio.addEventListener('click', function() {
    if (this.checked && !checkRadio) {
        alert("You selected premium");
        checkRadio = true;
        return true;
    }
    uncheckRadio(radio);
    checkRadio = false;
    return false;
});

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

// Form validation
const emailFormat = /^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9]*)\.)+[a-zA-Z]+$/;
const usernameFormat = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
const passwordFormat = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!#$&_*?^{}~-])[a-zA-Z!#$&_*?^{}~-]{8,}/;

email.oninput = function() {
    validateInput(this, emailFormat);
};

username.oninput = function() {
    validateInput(this, usernameFormat);
}

password.oninput = function() {
    validateInput(this, passwordFormat);
}

function checkForm(form) {
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
}

submit.addEventListener('click', function() {
    if (checkForm(form)) {
        alert('congrats, checkfrom corect');
        document.getElementsByClassName('gallery')[0].setAttribute("style", "display:none;");
    }
})