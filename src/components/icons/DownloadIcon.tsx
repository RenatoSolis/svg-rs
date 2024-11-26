import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

const DownloadIcon: React.FC<IconProps> = ({ width = 24, height = 24, ...props }) => (
 
    <svg  xmlns="http://www.w3.org/2000/svg"  
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24" 
    {...props} 
    stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  
    className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" />
    </svg>

);

export default DownloadIcon;