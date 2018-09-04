import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Libs
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import * as API from './security/api';
// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('csgo');
  }

  videoSearch(term) {
    YTSearch({key: API.YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // A debounce to call a function once after 3ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}/>
        <VideoDetail
          video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
