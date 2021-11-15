import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import { AppContext } from "./context";

const Home = () => {

  const {toggleModal, toggleSidebar} = useContext(AppContext)
 
  
  return (
    <>
      <main className="main">
        <div><button className="sidebar-toggle" onClick={toggleSidebar}><FaBars/></button></div>
     
        <button className="btn" onClick={toggleModal}>SHOW MODAL</button>
        
      </main>
    </>
  );
};

export default Home;
