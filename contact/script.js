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

// change formular color with Set Interval
var i = 0;

function change() {
    var doc = document.getElementsByClassName('formular-container')[0];
    var color = ["#F1C3D0", "#C993D4", "#DB8DB2", "#9FA3E3", "#51C0BF"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
var interval = setInterval(change, 1000);

var colorButton = document.createElement("button");
colorButton.setAttribute('id', 'submit');
colorButton.setAttribute('style', 'padding: 10px; margin: 5px;margin-left: 310px;');
colorButton.setAttribute('class', 'form-group');
colorButton.appendChild(document.createTextNode("Vreau culoarea asta"));

document.getElementsByClassName('main-body')[0].insertBefore(colorButton,
    document.getElementsByClassName('formular-container')[0]);

colorButton.addEventListener("click", function stop() {
    clearInterval(interval);
});

var t = 0;

// esc key
document.body.addEventListener('keydown', function(e) {
    if (e.keyCode == 27 && t == 0) {
        var escape = document.createElement("div");
        escape.setAttribute("id", "makeItGrey");
        escape.setAttribute("class", "escapeClass");
        document.body.appendChild(escape);
        t = 1;
    } else if (e.keyCode == 27 && t == 1) {
        t = 0;
        document.body.removeChild(document.getElementById("makeItGrey"));
    }
});