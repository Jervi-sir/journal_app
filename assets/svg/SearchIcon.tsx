import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native'

const SearchIcon = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M14 13L13 14L9.95108 10.5155C8.8956 11.4398 7.51322 12 6 12C2.68628 12 0 9.31371 0 6C0 2.68629 2.68628 0 6 0C9.31372 0 12 2.68629 12 6C12 7.40205 11.5191 8.69179 10.7133 9.71325L14 13ZM6 11C8.76141 11 11 8.76143 11 6C11 3.23857 8.76141 1 6 1C3.23859 1 1 3.23857 1 6C1 8.76143 3.23859 11 6 11Z" fill="black"/>
      </Svg>
    </View>

  );
};

export default SearchIcon;