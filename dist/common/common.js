"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
var src_1 = require("../../src");
/**
 * @author Yash Karanke
 * @summary A common method to figure out the URL and based on the get the result.
 *
 */
var common = function (url) {
    if (url.indexOf("youtube.com") > -1) {
        src_1.getYouTubeThumbnail(url);
    }
    if (url.indexOf("vimeo.com") > -1) {
        src_1.getVimeoThumbnail(url);
    }
};
exports.common = common;
