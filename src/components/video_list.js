import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // With a key definition app will
  // re-render only the updated video
  // of list
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}  />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
