import * as React from "react";
import { SVGProps } from "react";
const FacebookSocialIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.833 9.896a3.854 3.854 0 0 0-3.854 3.854v2.146h-2.063a.188.188 0 0 0-.187.187v2.834c0 .103.084.187.188.187h2.062v5.813c0 .103.084.187.188.187H18a.187.187 0 0 0 .187-.187v-5.813h2.081a.188.188 0 0 0 .182-.142l.708-2.833a.187.187 0 0 0-.182-.233h-2.789V13.75a.646.646 0 0 1 .646-.646H21a.187.187 0 0 0 .187-.187v-2.834A.187.187 0 0 0 21 9.896h-2.167Z"
    />
  </svg>
);
export default FacebookSocialIcon;
