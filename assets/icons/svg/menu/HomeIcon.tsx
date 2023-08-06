import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIcon(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.667a2 2 0 01.8-1.6L6.356.9a2 2 0 012.4 0l5.555 4.167a2 2 0 01.8 1.6V15a2 2 0 01-2 2H2a2 2 0 01-2-2V6.667zM8.889 14a1.5 1.5 0 000-3H6.222a1.5 1.5 0 000 3H8.89z"
        fill="#fff"
      />
    </Svg>
  )
}

export default HomeIcon
