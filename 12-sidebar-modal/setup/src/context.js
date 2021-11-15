import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider

    value={{
      isModalOpen,
      isSidebarOpen,
      toggleModal,
      toggleSidebar,
    }}
     
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
