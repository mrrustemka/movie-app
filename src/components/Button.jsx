import React, { useState } from "react";

function Button() {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}

export default Button;
