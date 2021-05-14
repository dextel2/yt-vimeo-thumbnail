"use strict";
/**
 * @description a method which returns Vimeo Video Thumbnail on a valid Vimeo video ID
 * @param {String} url
 * @example getVimeoThumbnail("https://vimeo.com/29951514")
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVimeoThumbnail = void 0;
const getVimeoThumbnail = (url) => {
    var id = false;
    var request = new XMLHttpRequest();
    request.open("GET", "https://vimeo.com/api/oembed.json?url=" + url, false);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            if (response.video_id) {
                id = response.thumbnail_url;
            }
        }
    };
    request.send();
    return id;
};
exports.getVimeoThumbnail = getVimeoThumbnail;
