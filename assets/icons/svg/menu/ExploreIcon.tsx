import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExploreIcon(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.863 1.06L4.847 3.4a2.129 2.129 0 00-1.448 1.448l-2.406 8.25c-.45 1.542.905 3.008 2.478 2.68l8.022-1.671a2.13 2.13 0 001.621-1.531l2.401-8.917c.432-1.604-1.057-3.062-2.652-2.597z"
        stroke="#878787"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default ExploreIcon
