import * as React from "react"
import { SVGProps } from "react"
const InstagramSocialIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={35}
    fill="none"
    {...props}
  >
    <circle cx={17} cy={17.5} r={16.5} stroke="#000" />
    <path
      fill="#000"
      d="M17 14.792a2.708 2.708 0 1 0 0 5.416 2.708 2.708 0 0 0 0-5.416Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12.641 10.068a39.557 39.557 0 0 1 8.718 0 3.45 3.45 0 0 1 3.043 3.01 38.056 38.056 0 0 1 0 8.843 3.45 3.45 0 0 1-3.043 3.011 39.552 39.552 0 0 1-8.718 0 3.45 3.45 0 0 1-3.043-3.01 38.06 38.06 0 0 1 0-8.843 3.45 3.45 0 0 1 3.043-3.011Zm8.526 2.432a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667Zm-8.125 5a3.958 3.958 0 1 1 7.916 0 3.958 3.958 0 0 1-7.916 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default InstagramSocialIcon
