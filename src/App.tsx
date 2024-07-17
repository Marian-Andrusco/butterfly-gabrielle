import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import React, { createContext, useState } from "react";
import Footer from "./components/Footer";

type TColappse = {
  colappse: boolean;
  setColappse?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const sidebarCollapse = createContext<TColappse>({
  colappse: false,
});

function App() {
  const [colappse, setColappse] = useState<boolean>(false);

  return (
    <sidebarCollapse.Provider value={{ colappse, setColappse }}>
      {/* <div className=" lg:grid lg:grid-cols-12 lg:grid-rows-1  sm:flex flex-col">
        <div
          className={
            colappse
              ? "col-span-1 "
              : "min-[1950px]:col-span-2 xl:col-span-3 lg:col-span-4"
          }
        >
          <Navbar />
        </div>
        <div
          className={
            colappse
              ? "col-span-11"
              : "min-[1950px]:col-span-10 xl:col-span-9 lg:col-span-8 "
          }
        >
          <Outlet />
          <Footer />
        </div>
      </div> */}

      <div className="flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>

      <>
        <a
          // href="https://wa.me/40769834096"
          target="_blank"
          className="flex items-center justify-center w-[62px] h-[62px] bg-neutral-content hover:bg-neutral cursor-pointer rounded-full shadow-2xl fixed whatsapp-btn transition-all ease-in text-success hover:text-accent"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </>
    </sidebarCollapse.Provider>
  );
}

export default App;
