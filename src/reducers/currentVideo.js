import Redux from 'redux';
import changeVideo from '../actions/currentVideo.js';
// import {CHANGE_VIDEO} from '../actions/currentVideo.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    // console.log('2ndlog:', Object.assign({}, state, {currentVideo: action.video}))
    return Object.assign({}, state, action.video)
    // return action.video;
  }
  
  
  
  
  return state
};

export default currentVideoReducer;
