
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
    padding: 5,

    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

// Unused styles as of now...
// borderColor: '#79D2CA',
    // borderBottomWidth: 2,
    // borderRadius: 2,

export { CardSection };
