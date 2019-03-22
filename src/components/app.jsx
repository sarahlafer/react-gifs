import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import Giflist from './giflist.jsx';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "2sfHyP9tcEkMiK4LrD"
    }

    this.search("disney");
  }

  search = (query) => {
    giphy("5MJUoXFvNPOY5OOdUxmd2CWVh37Hp1bS").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    })
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <Giflist gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
      );
  }
};

export default App;
