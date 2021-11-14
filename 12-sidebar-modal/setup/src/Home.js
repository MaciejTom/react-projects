import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";

const Home = () => {

  const [isShowingModal, setIsShowingModal] = useState(false)

  const showModal = () => {

    console.log("asd")
    setIsShowingModal(prev => !prev)
  }
  return (
    <>
      <main className="main">
        <div><button className="sidebar-toggle"><FaBars/></button></div>
     
        <button className="btn" onClick={()=> showModal()}>SHOW MODAL</button>
        
      </main>
    </>
  );
};

export default Home;
