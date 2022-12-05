import * as React from "react";

const Link = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.238 8.762c.739 1.041 2.294.859 3.056 0l1.515-1.524c.857-.936.887-2.144 0-3.048-.865-.881-2.182-.881-3.047 0L7.238 5.714"
      stroke="#0587FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.762 8.053C8.022 7.012 6.476 7.141 5.714 8L4.19 9.505c-.856.935-.886 2.163 0 3.066.866.882 2.182.882 3.048 0l1.524-1.524"
      stroke="#0587FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Link;
