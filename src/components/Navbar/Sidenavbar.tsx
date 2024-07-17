import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
// import DesktopNavbar from "./DesktopNavbar";
// import { useResize } from "../../utility/Utility";

const Sidenavbar = () => {
  const [showTherapies, setShowTherapies] = useState<boolean>(false);
  // const { mobileNavbar } = useResize();
  const [showBtnsMobile, setShowBtnsMobile] = useState<boolean>(false);

  return (
    // <>
    //   {mobileNavbar ? (
    //     <MobileNavbar
    //       showBtnsMobile={showBtnsMobile}
    //       setShowBtnsMobile={setShowBtnsMobile}
    //       showTherapies={showTherapies}
    //       setShowTherapies={setShowTherapies}
    //     />
    //   ) : (
    //     <DesktopNavbar
    //       showTherapies={showTherapies}
    //       setShowTherapies={setShowTherapies}
    //     />
    //   )}
    // </>
    <>
      <MobileNavbar
        showBtnsMobile={showBtnsMobile}
        setShowBtnsMobile={setShowBtnsMobile}
        showTherapies={showTherapies}
        setShowTherapies={setShowTherapies}
      />
    </>
  );
};

export default Sidenavbar;
