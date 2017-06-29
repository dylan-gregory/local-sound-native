
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
};

const styles = {
  containerStyle: {
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#21252B',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#24828F',
    position: 'relative'
  }
};

export { CardSection };
