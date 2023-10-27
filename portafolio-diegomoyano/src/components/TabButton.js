import React from "react";

const TabButton = ({ selectTab, children }) => {
  return (
    <button
      onClick={selectTab} className="btn-about">
      {children}
    </button>
  );
};

export default TabButton;
