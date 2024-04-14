import * as React from "react";
import { SVGProps } from "react";
const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.333 2.5 8.144 6.15.003.002c.904.663 1.356.995 1.852 1.123.438.113.898.113 1.336 0 .496-.128.95-.46 1.856-1.126 0 0 5.223-4.008 8.143-6.149M1 15.567V5.433c0-1.493 0-2.24.29-2.81a2.66 2.66 0 0 1 1.166-1.166c.57-.29 1.317-.29 2.81-.29h15.467c1.494 0 2.24 0 2.81.29.502.256.91.663 1.166 1.166C25 3.192 25 3.939 25 5.429v10.143c0 1.49 0 2.235-.29 2.805-.257.502-.665.91-1.167 1.166-.57.29-1.315.29-2.806.29H5.263c-1.491 0-2.238 0-2.807-.29a2.667 2.667 0 0 1-1.165-1.166C1 17.807 1 17.06 1 15.567Z"
    />
  </svg>
);
export default MailIcon;
