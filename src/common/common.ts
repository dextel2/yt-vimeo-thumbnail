import { getVimeoThumbnail, getYouTubeThumbnail } from "../../src"

/**
 * @author Yash Karanke
 * @summary A common method to figure out the URL and based on the get the result.
 * 
 */
export const common = (url: string): void => {
	if (url.indexOf("youtube.com") > -1) {
		getYouTubeThumbnail(url)
	}
	if (url.indexOf("vimeo.com") > -1) {
		getVimeoThumbnail(url)
	}
}