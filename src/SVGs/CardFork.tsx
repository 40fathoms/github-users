import * as React from "react";

const CardFork = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={15}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.167 3.583a2.917 2.917 0 0 1-2.5 2.888v2.112h5.208a1.875 1.875 0 0 0 1.875-1.875V6.38a2.918 2.918 0 0 1 .833-5.712A2.917 2.917 0 0 1 12 6.47v.237a3.125 3.125 0 0 1-3.125 3.125H3.667v1.696a2.917 2.917 0 1 1-1.25.092V6.379A2.918 2.918 0 0 1 3.25.667a2.917 2.917 0 0 1 2.917 2.916ZM3.25 5.25a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Zm8.333 0a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Zm-6.666 9.167a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0Z"
      fill="#000"
    />
  </svg>
);

export default CardFork;
