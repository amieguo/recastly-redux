import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) =>{
    dispatch(changeVideo);
    searchYouTube({YOUTUBE_API_KEY, q})
  }
  
 
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;