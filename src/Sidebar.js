import React, { useRef, useEffect } from "react";
import links from "./data__links";
import "./Sidebar.css";

function Sidebar(props) {
  const { isSidebarOpen, location } = props;
  const container = useRef(null);

  useEffect(() => {
    const sidebar = container.current;
    const { center, bottom } = location;

    sidebar.style.left = `${center}px`;
    sidebar.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSidebarOpen ? "sidebar show" : "sidebar"}`}
      ref={container}
    >
      <div className="callout-arrow"></div>
      <div className="topbar"></div>
      <ul className="sidebar__links">
        {links.map((link, index) => {
          const { page, href } = link;
          return (
            <li key={index} className="sidebar__link">
              <a href={href}>{page}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
