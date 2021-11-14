import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {


  const [toggleNav, setToggleNav] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  

  // useEffect(() => {
  //  console.log("INSIDE OF USE EFFECT - toggleNav")

  //   // const linksHeigth = linksRef.current.getBoundingClientRect().height

  //   // if (toggleNav) {
  //   //   linksContainerRef.current.style.height = `${linksHeigth}px`
  //   // } else {
  //   //   linksContainerRef.current.style.height = `0px`
  //   // }
    

  //   // // window.addEventListener("resize", () => {
  //   // //   const width = window.innerWidth;
  //   // //   console.log(width)
  //   // //   if (width > 800) {
  //   // //     setToggleNav(false)
  //   // //   }
  //   // // })

  // },[toggleNav])

  useEffect(() => {
  

    const linksHeigth = linksRef.current.getBoundingClientRect().height
    console.log(linksHeigth)
    console.log(linksRef.current.style.height)
    const linksHeigthContainer = linksContainerRef.current.getBoundingClientRect().height
   

    if (toggleNav) {
      linksContainerRef.current.style.height = `${linksHeigth}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }
    

    // window.addEventListener("resize", () => {
    //   const width = window.innerWidth;
    //   console.log(width)
    //   if (width > 800) {
    //     setToggleNav(false)
    //   }
    // })
   
  }, [toggleNav])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setToggleNav(!toggleNav)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(({id, url, text}) => 
            <li key={id}><a href={url}>{text}</a></li>)}
           
          </ul>
        </div>

        <ul className="social-icons">
          {social.map(({id, url, icon}) =>
          <li key={id}> <a href={url}>{icon}</a></li> )}
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
