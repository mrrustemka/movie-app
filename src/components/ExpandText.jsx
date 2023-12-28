import React, { useState } from "react";

const containerStyle1 = { height: "24px", overflow: "hidden" };
const containerStyle2 = { height: "auto", overflow: "hidden" };
const buttonStyle = {
  background: "transparent",
  border: "none",
  color: "#ffffff",
  cursor: "pointer",
  
};

function ExpandTest() {
  const [isText, setIsText] = useState(true);
  return (
    <div>
      <div style={isText ? containerStyle1 : containerStyle2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <button
        onClick={() => setIsText((isText) => !isText)}
        style={buttonStyle}
      >
        {isText ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}

export default ExpandTest;
