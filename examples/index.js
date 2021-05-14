const { getYouTubeThumbnail } = require("../dist/youtube");
const { getVimeoThumbnail } = require("../dist/vimeo");

console.log(getYouTubeThumbnail("https://vimeo.com/29951514"));
console.log(getVimeoThumbnail("https://www.youtube.com/watch?v=s9hUucv9KEk&ab_channel=BotezLiveClips"));
