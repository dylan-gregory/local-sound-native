
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

  return (
      <TouchableOpacity
        onPress={props.onPress}
        style={props.style || buttonStyle} >
          <Text style={ textStyle }>
            {props.children}
          </Text>
      </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    // fontFamily: 'Raleway',
    alignSelf: 'center',
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 20
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9EE4E2',
    borderBottomWidth: 3,
    borderBottomColor: '#2AC4C0',
    borderRadius: 5,
    margin: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    // overflow: 'hidden',
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0
    }
  }
};



export { Button };
