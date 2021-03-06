import React from 'react';

  // Instead of:
  // const VideoListItem = (props) => {
  //   const video = props.video;
  // We can simply use the solution below
  // to get a specific props value
const VideoListItem = ({ video, onVideoSelect }) => {
  const videoSnippet = video.snippet;
  const imageUrl = videoSnippet.thumbnails.default.url;
  const title = videoSnippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
