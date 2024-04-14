import * as React from "react";
import { SVGProps } from "react";
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={11.5} r={3} stroke="#fff" strokeWidth={1.5} />
    <path
      stroke="#fff"
      strokeWidth={1.5}
      d="M21 11.389c0 4.91-5.625 11.111-9 11.111s-9-6.202-9-11.111C3 6.479 7.03 2.5 12 2.5s9 3.98 9 8.889Z"
    />
  </svg>
);
export default LocationIcon;
