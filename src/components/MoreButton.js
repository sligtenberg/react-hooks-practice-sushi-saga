import React from "react";

function MoreButton({ setIndex, index }) {
  return <button onClick={() => setIndex(index + 4)}>More sushi!</button>;
}

export default MoreButton;
