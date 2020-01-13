var xhr = new XMLHttpRequest();
var myObj;

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
};

var divAjax = createElement('div', {
    class: 'form-group'
});

var ajaxButton = createElement('button', {
    type: 'button',
    id: 'submit',
    textContent: 'Add photos from albums',
    class: 'dropbtn',
    style: 'width:200px; float:inline-end; padding:10px; margin:5px;'
});

var inputAjax = createElement('input', {
    type: 'text',
    placeholder: 'which album?',
    style: 'width:200px; float:inline-end; padding:10px; margin:1px;'
});

divAjax.appendChild(inputAjax);
divAjax.appendChild(ajaxButton);



ajaxButton.addEventListener('click', function() {
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?albumId=' + inputAjax.value);
    xhr.send();
})
var mainBody = document.getElementsByClassName('main-body')[0];
mainBody.insertBefore(divAjax, mainBody.getElementsByClassName('dropdown')[0]);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('success!', xhr);
        console.log(JSON.parse(xhr.response));
        myObj = JSON.parse(xhr.responseText);
        if (myObj.length == 0) {
            alert('Album id does not exist!');
            return false;
        }
        for (var i = 0; i < 10; i++) {
            var ol = document.createElement('ol');
            var container = document.createElement("div");
            // container.setAttribute("style", "background-color : purple; border: 1px solid black;");
            container.setAttribute('class', 'chart-item');

            var title = document.createElement("h1");
            title.setAttribute('class', 'song-text');
            title.appendChild(document.createTextNode(myObj[i].title));
            ol.appendChild(title);

            var img = document.createElement("img");
            img.src = myObj[i].thumbnailUrl;
            ol.appendChild(img);

            container.appendChild(ol);

            document.getElementsByTagName('ul')[1].appendChild(container);
        }
    } else {
        console.log('The request failed!');
    }
};


// prevent default

function fileUpload() {
    document.querySelector('.file-upload__input').click();
}

const button = document.querySelector('.file-upload__btn--upload');

button.addEventListener('click', (event) => {
    event.preventDefault();
    fileUpload();
});