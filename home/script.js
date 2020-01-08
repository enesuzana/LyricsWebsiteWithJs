window.onload = function() {
    submit.setAttribute("style", "opacity: 0.5;");
    submit.setAttribute('disabled', 'disabled');
    checkbox.checked = false;
    submit.onmouseover = function() {
        submit.style.cursor = "not-allowed";
    };
}

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

// Form validation

function checkForm(form) {
    // validate username
    if (!validateUsername(username)) {
        return false;
    }

    // validate email
    if (!validateEmail(email)) {
        return false;
    }
    // validate password
    if (!validatePassword(password)) {
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
    if (!checkForm(form)) {

    }
})

// VALIDATIONS

// Validate username
function validateUsername(username) {
    if (username.value == "") {
        alert("Error: Username is empty!");
        username.focus();
        return false;
    }

    const usernameFormat = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    if (username.value.match(usernameFormat)) {
        username.focus();
        return true;
    }
    email.focus();
    return false;
}

// Validate email
function validateEmail(email) {
    if (email.value == "") {
        alert("Error: Email is empty!");
        email.focus();
        return false;
    }

    const mailformat = /^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9]*)\.)+[a-zA-Z]+$/;

    if (email.value.match(mailformat)) {
        email.focus();
        return true;
    }
    email.focus();
    return false;
}


email.oninput = function() {
    validateEmail(this);
};

function validatePassword(password) {
    if (password.value == "") {
        alert("Error: Password is empty!");
        this.focus();
        return false;
    }

    const passwordFormat = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!#$&_*?^{}~-])[a-zA-Z!#$&_*?^{}~-]{8,}/;

    if (password.value.match(passwordFormat)) {
        console.log("yay");
        this.focus();
        return true;
    }

    this.focus();
    return false;
}

password.oninput = function() {
    validatePassword(this);
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

radio.onchange = function validateRadioButton() {
    if (radio = checkRadio(form.radiofield)) {
        alert("You selected " + radioValue);
        return true;
    }
    alert("Error: No value was selected!");
    return false;
}

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