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
export declare const getYouTubeThumbnail: (url: string) => any;
