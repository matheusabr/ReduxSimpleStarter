import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Youtube search
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// Youtube API Key
const YOUTUBE_API_KEY = 'AIzaSyDLSKC85B8smihsmEoYEK-W7Ma2Xo6divc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'csgo'}, (videos) => {
      this.setState({ videos });
    });
  }

  // Passing props
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
