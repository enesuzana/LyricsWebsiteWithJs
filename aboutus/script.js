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

// VIDEO CREATED FROM JS
var videoDiv = createElement('div', {
    class: 'responsive-container'
})
var videoIframe = createElement('iframe', {
    width: '560',
    height: '315',
    src: 'https://www.youtube.com/embed/qPC8AeU0_-8',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: 'true'
});
videoDiv.appendChild(videoIframe);
document.getElementsByClassName('main-body')[0].appendChild(videoDiv);