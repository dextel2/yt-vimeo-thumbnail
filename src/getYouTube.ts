/**
 * @author Yash Karanke
 * @since 1
 * @param {String} url 
 */
export const getYouTubeThumbnail = (url : string) => {
	let video : any, results : any;
	if (url === undefined || url === null) {
		return "";
	}
	if (url.indexOf("youtube.com") > -1) {
		results = url.match("[\\?&]v=([^&#]*)");
		video = results === null ? url : results[1];
		return "http://img.youtube.com/vi/" + video + "/0.jpg";
	}
}