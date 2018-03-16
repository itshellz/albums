import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

/* RN 0.53.0 we need to access objects directly not with destructuring */
export default class AlbumList extends React.Component {

  state = { albums: [] }; /* initializing component level state */
  componentWillMount() {
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
  }                           /* Setting state for component upon receiving
                                 data */

  //This method is created to map the data from albums.
  renderAlbums() {
  //  console.log('inside render Albums');
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  /*render() gets called each time state of component changes*/
  render() {
    console.log(this.state);
    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
    );
  }
}
