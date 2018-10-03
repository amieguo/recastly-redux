var CHANGE_VIDEO = 'CHANGE_VIDEO';
var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: CHANGE_VIDEO,
    video: video
  }
  
};
// dispatch(changeVideo(video));
export default changeVideo;

