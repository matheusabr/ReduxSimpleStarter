import React from 'react';

// 1 - We`re using Bootstrap 4 in this project
// 2 - We gonna use className instead
// of class inside 'html' components
// cause it is a javascript code and
// class is reserved to JS Class components
// 3 - Receiving props and using its value
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;
