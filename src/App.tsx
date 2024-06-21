import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { createContext, useState } from "react";

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
      <div className="lg:grid lg:grid-cols-12 lg:grid-rows-1  sm:flex flex-col">
        <div
          className={
            colappse
              ? "col-span-1"
              : "min-[1950px]:col-span-2 xl:col-span-3 lg:col-span-4 "
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
        </div>
      </div>
    </sidebarCollapse.Provider>
  );
}

export default App;
