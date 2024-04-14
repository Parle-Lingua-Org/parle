import * as React from "react";
import { SVGProps } from "react";
const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.631 10.934a3.5 3.5 0 1 0 0 3.132m0-3.132c.236.472.369 1.003.369 1.566 0 .563-.133 1.095-.369 1.566m0-3.132 6.738-3.368m-6.738 6.5 6.738 3.368m0-9.868a3.5 3.5 0 1 0 6.26-3.132 3.5 3.5 0 0 0-6.26 3.132Zm0 9.868a3.5 3.5 0 1 0 6.262 3.131 3.5 3.5 0 0 0-6.262-3.13Z"
    />
  </svg>
);
export default ShareIcon;
