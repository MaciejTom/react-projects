import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";
import links from "./data";

const Submenu = () => {
 
  const { isSubmenuOpen, location, page: {page, links}} = useGlobalContext();
  
  const container = useRef(null);

  const [currentColumnLength, setCurrentColumnLength] = useState(3)
  

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;


  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"} `}
      ref={container}
    >
       <h4>{page}</h4>
       
     <div className={`submenu-center col-${links.length}`}>
      
       {links.map(el => {
      
            return <a key={el.label} href={el.url}>{el.icon}{el.label}</a>
       })}
        </div>
    </aside>
  );
};

export default Submenu;
