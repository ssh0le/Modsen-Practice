import React, { useRef } from "react";

const ScrollableList = () => {
  const listRef = useRef(null);

  const scrollToElement = (index: number): void => {
    
  };

  return (
    <div style={{ overflowX: "auto", maxHeight: "200px" }}>
      <ul ref={listRef} style={{ whiteSpace: "nowrap", overflowY: 'scroll', height: "50px" }}>
        {/* Ваш список элементов */}
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        {/* ... */}
      </ul>
      <button onClick={() => scrollToElement(3)}>Scroll to Item 4</button>
    </div>
  );
};

export default ScrollableList;