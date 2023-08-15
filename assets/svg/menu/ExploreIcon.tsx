import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExploreIcon = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path d="M12.3734 1.12387L4.72701 3.49345C4.03294 3.70854 3.4965 4.26277 3.30414 4.96348L0.934857 13.5944C0.510433 15.1406 1.88265 16.5833 3.44807 16.2368L11.1058 14.5417C11.8914 14.3678 12.5118 13.7659 12.7094 12.9859L15.0674 3.68045C15.4758 2.06864 13.9616 0.631687 12.3734 1.12387Z" stroke="#878787" stroke-width="1.5"/>
    </Svg>
  );
};

export default ExploreIcon;