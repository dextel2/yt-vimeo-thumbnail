"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYouTubeThumbnail = void 0;
/**
 * @author Yash Karanke
 * @since 1
 * @param {String} url
 */
const getYouTubeThumbnail = (url) => {
    let video, results;
    if (url === undefined || url === null) {
        return "";
    }
    if (url.indexOf("youtube.com") > -1) {
        results = url.match("[\\?&]v=([^&#]*)");
        video = results === null ? url : results[1];
        return "http://img.youtube.com/vi/" + video + "/0.jpg";
    }
};
exports.getYouTubeThumbnail = getYouTubeThumbnail;
