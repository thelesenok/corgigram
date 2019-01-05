const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHadler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    }) 
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initilizeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHadler);
}

function setThumbnails() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(function (thumbnail) {
        var randomThumbIndex =1 + Math.round(Math.random(2) * 2);
        thumbnail.setAttribute('data-image-url', 'img/corgi-' + randomThumbIndex +'.jpg');
    })
}

setThumbnails();
 
initilizeEvents();