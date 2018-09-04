import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Youtube search
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/search_bar';
// Youtube API Key
const YOUTUBE_API_KEY = 'AIzaSyDLSKC85B8smihsmEoYEK-W7Ma2Xo6divc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'csgo'}, (videos) => {
      // Update state with retrieved videos list
      console.log(videos);
      // this.setState({ videos: videos });
      // When the key and value have the same
      // name we can simply use a single name
      // to set its value:
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
