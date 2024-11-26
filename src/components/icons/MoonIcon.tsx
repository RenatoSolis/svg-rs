import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

const MoonIcon: React.FC<IconProps> = ({ width = 40, height = 40, fill = "currentColor", ...props }) => (
<svg
     width={width}
     height={height}
     fill={fill}
     {...props}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
</svg>
);

export default MoonIcon;
