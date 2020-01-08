// // Form creation
// var formLogare = document.createElement("form");
// var textInput = document.createElement("input");
// textInput.setAttribute('type', "text");
// textInput.setAttribute('name', "username");
// textInput.setAttribute('placeholder', 'Enter username');


// formLogare.appendChild(textInput);

// document.getElementsByClassName('gallery-text')[0].appendChild(formLogare);

// SweetAlert import
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

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