import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkIcon = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path d="M11.102 0H1.85034C0.832653 0 0.00925191 0.85 0.00925191 1.88889L0 17L6.47619 14.1667L12.9524 17V1.88889C12.9524 0.85 12.1197 0 11.102 0ZM11.3333 14.5714L6.47619 12.1429L1.61905 14.5714V1.61905H11.3333V14.5714Z" fill="#878787"/>
    </Svg>
  );
};

export default BookmarkIcon;