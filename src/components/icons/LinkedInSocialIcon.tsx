import * as React from "react";
import { SVGProps } from "react";
const LinkedInSocialIcon = ({
  fill = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={35}
    fill="none"
    {...props}
  >
    <circle cx={17} cy={17.5} r={16.5} stroke={fill} />
    <path
      fill={fill}
      d="M12.535 24.82H9.168V14.729h3.367V24.82Zm-1.683-11.59A1.858 1.858 0 0 1 9 11.365c0-1.03.828-1.865 1.852-1.865 1.023 0 1.852.836 1.852 1.865 0 1.031-.83 1.865-1.852 1.865ZM24.32 24.82h-3.364v-4.812c0-3.163-3.37-2.896-3.37 0v4.812h-3.367V14.729h3.367v1.838c1.468-2.718 6.734-2.92 6.734 2.604v5.649Z"
    />
  </svg>
);
export default LinkedInSocialIcon;
