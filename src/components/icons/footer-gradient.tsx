import * as React from "react";
import { SVGProps } from "react";
const FooterGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={40}
    viewBox="0 0 1440 40"
    fill="none"
    {...props}
  >
    <rect width={1440} height={40} fill="url(#paint0_linear_6344_3276)" />
    <defs>
      <linearGradient
        id="paint0_linear_6344_3276"
        x1={40.2218}
        y1={20}
        x2={1440}
        y2={20.0005}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B3355" stopOpacity={0} />
        <stop offset={0.610577} stopColor="#267FFA" />
        <stop offset={1} stopColor="#A4E8F5" />
      </linearGradient>
    </defs>
  </svg>
);
export default FooterGradient;
