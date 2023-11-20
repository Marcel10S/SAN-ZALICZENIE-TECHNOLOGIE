import React, {useEffect, useRef, useState} from "react";

export default function Footer() {
  const footer = useRef(null);
  const [footerHeight, setFooterHeight] = useState("60px");

  useEffect(() => {
    if (!footer.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setFooterHeight(footer.current.offsetHeight)
    });
    resizeObserver.observe(footer.current);
    return () => resizeObserver.disconnect();
  }, []);


  return (
    <>
      <footer className="footer" ref={footer}>
        <div className="footer__content">
          <div className="footer__content__row">Autor: Marcel Stulczewski</div>
          <div className="footer__content__row">Index: 118903</div>
        </div>
      </footer>
      <div style={{ height: footerHeight }}></div>
    </>
  );
}