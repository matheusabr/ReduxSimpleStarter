import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchBar from './components/search_bar';

// Youtube API Key
const YOUTUBE_API_KEY = 'AIzaSyDLSKC85B8smihsmEoYEK-W7Ma2Xo6divc';

// Create a new component
// This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component`s generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
