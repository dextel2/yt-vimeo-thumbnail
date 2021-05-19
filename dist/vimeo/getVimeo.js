"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVimeoThumbnail = void 0;
/**
 * @author Yash Karanke
 * @since 1
 * @description Getting vimeo thumbnail is tricky as compared to getting YouTube video Thumbnail, it highly relies on it's own API endpoint in order to get `videoData` which contains thumbnail.
 * @summay a method which returns Vimeo Video Thumbnail on a valid Vimeo video ID
 * @param {String} url
 * @example getVimeoThumbnail("https://vimeo.com/29951514")
 */
var xmlhttprequest_1 = require("xmlhttprequest");
var getVimeoThumbnail = function (url) {
    var result;
    var request = new xmlhttprequest_1.XMLHttpRequest();
    request.open("GET", "https://vimeo.com/api/oembed.json?url=" + url, false);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            if (response.video_id) {
                result = response.thumbnail_url;
            }
        }
    };
    request.send();
    return result;
};
exports.getVimeoThumbnail = getVimeoThumbnail;
