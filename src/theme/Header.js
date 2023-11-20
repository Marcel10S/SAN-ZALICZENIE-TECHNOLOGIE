import React, { useRef, useState, useEffect } from "react";
import routeList from "../data/routeList.js";
import "./index.css"

export default function Header() {
  const header = useRef(null);
  const [menuHeight, setMenuHeight] = useState("60px");

  useEffect(() => {
    if (!header.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setMenuHeight(header.current.offsetHeight)
    });
    resizeObserver.observe(header.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <div className="header" ref={header}>
        <div className="header__routes-container">
          {Object.keys(routeList).map((routeKey) => {
            return <a className="header__routes-container__route" href={routeList[routeKey].path}>{routeList[routeKey].label}</a>
          })}
        </div>
      </div>
      <div style={{ height: menuHeight }}></div>
    </>
  );
}