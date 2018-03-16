/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// importing required react libraries.
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Creating a component
/* Typical example of a functional component, i.e. a component which is a
   function and returns some amount of JSX to render on to the screen. And also
   can be defined as a component which renders static data
*/
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

//making App component available to index.js
export default App;
