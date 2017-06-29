
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
    backgroundColor: '#DB6F59',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#79D2CA',
    position: 'relative'
  }
};

export { CardSection };
