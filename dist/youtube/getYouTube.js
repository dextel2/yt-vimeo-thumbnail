"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYouTubeThumbnail = void 0;
/**
 * @author Yash Karanke
 * @description There are two types of YouTube video URL
 * 				1. https://www.youtube.com/watch?v=<video_id>&ab_channel=Dhawalplaysd4Dhawalplaysd4
 * 				2. https://www.youtube.com/watch?v=<video_id>&ab_channel=<channel_name>
 *
 * in order to make this method work, we rely on the `2nd` video link type as it is the latest format for most of the users
 * @summary a simple method to get YouTube video Thumnail from YouTube URL
 * @since 1
 * @param {String} url
 * @example getYouTubeThumbnail("https://www.youtube.com/watch?v=<video_id>&ab_channel=<channel_name>")
 */
const getYouTubeThumbnail = (url) => {
    let video, results;
    if (url === undefined || url === null) {
        return false;
    }
    if (url.indexOf("youtube.com") > -1) {
        results = url.match("[\\?&]v=([^&#]*)");
        video = results === null ? url : results[1];
        return "http://img.youtube.com/vi/" + video + "/0.jpg";
    }
};
exports.getYouTubeThumbnail = getYouTubeThumbnail;