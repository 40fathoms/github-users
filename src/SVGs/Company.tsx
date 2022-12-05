import * as React from "react";

const Company = (
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
      d="M4 4h1v2H4V4ZM4 7h1v2H4V7ZM7 4h1v2H7V4ZM7 7h1v2H7V7ZM4 10h1v2H4v-2ZM7 10h1v2H7v-2Z"
      fill="#0587FF"
    />
    <path
      d="M15 7a1 1 0 0 0-1-1h-3V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v13h14V7ZM2 2h8v12H2V2Zm9 12V7h3v7h-3Z"
      fill="#0587FF"
    />
  </svg>
);

export default Company;
