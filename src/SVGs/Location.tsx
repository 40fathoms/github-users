import * as React from "react";

const Location = (
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
      d="M7.935 3.987a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      fill="#0587FF"
    />
    <path
      d="M11.778 2.141a5.435 5.435 0 0 0-8.397 6.81l3.779 5.8a.925.925 0 0 0 1.55 0l3.78-5.8a5.434 5.434 0 0 0-.712-6.81Zm-.127 6.264L7.935 14.11 4.22 8.405a4.455 4.455 0 0 1 .58-5.557 4.435 4.435 0 0 1 6.272 0 4.455 4.455 0 0 1 .58 5.557Z"
      fill="#0587FF"
    />
  </svg>
);

export default Location;
