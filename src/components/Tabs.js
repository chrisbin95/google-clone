import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    url: "/search",
    text: "All",
  },
  { url: "/news", text: "News" },
  {
    url: "/images",
    text: "Images",
  },
  { url: "/videos", text: "Videos" },
];

function Tabs() {
  return (
    <div>
      {links.map(({ url, text }, index) => (
        <React.Fragment key={index}>
          <NavLink
            to={url}
            activeClassName="text-white border-b-2 border-white pb-2"
            className="tall:text-[14px] text-[16px] py-4 tall:px-[12px] px-4 mr-4"
          >
            {"\u00A0"}{"\u00A0"}{"\u00A0"}{text}
          </NavLink>
          {url !== "/videos" && " | "} {/* Add separator if not the last link */}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Tabs;