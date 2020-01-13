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

var video = createElement('video', {
    width: '320',
    height: '240'
});
var sourceMP4 = document.createElement("source");
sourceMP4.type = "video/ogg";
sourceMP4.src = "freshRoses.ogg";
video.appendChild(sourceMP4);
document.getElementsByClassName('main-body')[0].appendChild(video);