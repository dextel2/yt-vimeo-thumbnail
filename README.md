# Get Video Thumbnails
<hr/>
Recently I faced an issue where I had to get YouTube and/or Vimeo video Thumbnails, so natually I did what many devs do, search an npm package, but I did not got any good results or the results were not up to my mark.

<br/>
<br/>

So, I started from the scratch to build that functionality and in a week I was successful. I made the exact thing I wanted.

## Get thumbnails easily
<hr/>
Who needs thumbnails, right ? but sometimes you do need them. One day I was telling this thing I made to my friend @thisisdg (Dhruv), and Dhruv jokingly told me to publish an npm package, because many might need it, so thanks to his idea I made this package (still not sure if it works in production)

## Example
<hr/>

#### YouTube
```javascript
const { getYouTubeThumbnail } = require("yt-vimeo-thumbnail/dist/youtube/getYouTube");
console.log(getYouTubeThumbnail("https://www.youtube.com/watch?v=gxDYfZzkuKQ&ab_channel=ODXGODXG"));
```

### Vimeo
```javascript
const { getVimeoThumbnail } = require("yt-vimeo-thumbnail/dist/vimeo/getVimeo");
console.log(getVimeoThumbnail("https://vimeo.com/29951514"));
```

### Or not sure
```javascript
const { common } = require("yt-vimeo-thumbnail/dist/common/common");
console.log(common("https://vimeo.com/29951514"));
```