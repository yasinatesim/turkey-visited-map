import React, { SVGProps } from "react";

type Props = {
  className?: string;
} & SVGProps<SVGSVGElement>;

const IconLink: React.FC<Props> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    className={className}
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"
    />
  </svg>
);

export default IconLink;
