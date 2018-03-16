import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { cardStyle } = styles;
  return (
    <View style={cardStyle}>
      {props.children}
    </View>
  );
};

/*****  Styling Section *****/
const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1, /* This property must used for android to shadow to be appeared */
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
