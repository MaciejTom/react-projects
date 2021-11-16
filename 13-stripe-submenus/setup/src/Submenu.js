import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";
import links from "./data";

const Submenu = () => {
 
  const { isSubmenuOpen, location, page: {page, links}} = useGlobalContext();
  console.log(page)
  const container = useRef(null);

  const [currentColumnLength, setCurrentColumnLength] = useState(3)
  
  // const currentColumnLength = links.map(el => {
  //   if (el.page == submenuContext) {
  //     return el.links.length
  //   }
  // })

  

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;


    // const currSub = sublinks.find(el => {
    //   return el.page == submenuContext
    // })
    // console.log(currSub)
    // setCurrentColumnLength(links.map(el => {
    //   if (el.page == submenuContext) {
    //     return el.links.length
    //   }}))
      console.log(currentColumnLength)

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
