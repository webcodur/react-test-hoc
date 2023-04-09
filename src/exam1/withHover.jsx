import { useState } from "react";

export default function withHover(InnerComponent) {
  // props는 App.jsx 부모에서 prop로 전달한 데이터
  return (props) => {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
      setIsHovered(true);
    }

    function handleMouseLeave() {
      setIsHovered(false);
    }

    return (
      <InnerComponent
        {...{
          ...props,
          handleMouseEnter,
          handleMouseLeave,
          isHovered
        }}
      />
    );
  };
}