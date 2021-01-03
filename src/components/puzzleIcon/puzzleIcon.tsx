import React from "react";

type PuzzleIconProps = {
  className: string | undefined
}

const PuzzleIcon: React.FC<PuzzleIconProps> = ({className}) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3V5H15V10H17C18.1046 10 19 10.8954 19 12C19 13.1046 18.1046 14 17 14H15V19H10V17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17V19H1V14H3C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10H1V5H6V3Z"
      stroke="#5E89FE"/>
  </svg>
);

export default PuzzleIcon
