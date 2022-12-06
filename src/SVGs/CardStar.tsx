import * as React from "react";

const CardStar = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16.736 5.896-4.959-.72L9.561.682a.628.628 0 0 0-1.121 0L6.223 5.176l-4.96.72a.624.624 0 0 0-.345 1.067l3.588 3.498-.848 4.94a.624.624 0 0 0 .907.658L9 13.727l4.436 2.332a.624.624 0 0 0 .906-.658l-.848-4.94 3.588-3.498a.624.624 0 0 0-.346-1.067Z"
      fill="#000"
    />
  </svg>
);

export default CardStar;
