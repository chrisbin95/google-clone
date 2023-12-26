import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center font-body p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
      <h1>{currentYear} Google, Inc. </h1>
    </div>
  );
}

export default Footer;

