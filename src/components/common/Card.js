
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#F4F9E9',
    backgroundColor: '#F4F9E9',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

// Unused styles as of now...
// borderBottomWidth: 0,
//

export { Card };
