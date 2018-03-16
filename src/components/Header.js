import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const {
    textStyles,
    viewStyles
  } = design;
  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{props.headerText}</Text>
    </View>
  );
};
/*** Header Styling ***/
//custom styling object it can be any name.

const design = {
//View styling
  viewStyles: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    elevation: 3 /* This property must used for android to shadow to be appeared */
  },
// Text styling inside the Header
  textStyles: {
    fontSize: 30,     /* Font Size of text inside the header */
    color: '#1C34D4',    /* Text color property */
  }
};
//Making Header component available for other files.
export default Header;
