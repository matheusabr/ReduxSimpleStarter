import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as API from './security/api'
// Youtube search
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API.YOUTUBE_API_KEY, term: 'csgo'}, (videos) => {
      this.setState({ videos });
    });
  }

  // Passing props
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
