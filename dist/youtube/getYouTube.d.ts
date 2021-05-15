/**
 * @author Yash Karanke
 * @description There are two types of YouTube video URL
 * 				1. https://www.youtube.com/watch?v=<video_id>
 * 				2. https://www.youtube.com/watch?v=<video_id>&ab_channel=<channel_name>
 *
 * this method works on both of them
 * @summary a simple method to get YouTube video Thumnail from YouTube URL
 * @since 1
 * @param {String} url
 * @example getYouTubeThumbnail("https://www.youtube.com/watch?v=<video_id>&ab_channel=<channel_name>")
 */
export declare const getYouTubeThumbnail: (url: string) => any;
