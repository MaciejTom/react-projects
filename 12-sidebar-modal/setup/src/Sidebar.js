import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  return (
    <aside className={"sidebar show-sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
             
              <a href={url}> {icon}{text}</a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url} />
              {icon}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
