import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BookmarkIcon(props) {
  return (
    <Svg
      width={13}
      height={17}
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.102 0H1.85C.833 0 .01.85.01 1.889L0 17l6.476-2.833L12.952 17V1.889C12.952.85 12.12 0 11.102 0zm.231 14.571l-4.857-2.428L1.62 14.57V1.62h9.714v12.952z"
        fill="#878787"
      />
    </Svg>
  )
}

export default BookmarkIcon
