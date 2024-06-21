import { Link } from "react-router-dom";
// Icons
import { GiButterfly } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { TbPhysotherapist } from "react-icons/tb";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { PiButterflyThin } from "react-icons/pi";
import { TMobileNavbarProp } from "../../types/AppTypes";
import { changeLogo } from "../../utility/Utility";
import { routesBtns, therapies } from "../../../public/data";
import { useEffect } from "react";

const MobileNavbar = ({
  showBtnsMobile,
  setShowBtnsMobile,
  showTherapies,
  setShowTherapies,
}: TMobileNavbarProp) => {
  useEffect(() => {
    setShowBtnsMobile(false);
    window.addEventListener("resize", () => setShowBtnsMobile(false));
  }, []);

  return (
    <>
      <div className="w-full h-[60px] bg-base-100 flex justify-between items-center py-6 px-8 border-b-2 border-neutral-content">
        <Link
          to="/"
          className="flex text-4xl justify-center items-center text-neutral "
        >
          <GiButterfly className="mr-2 text-4xl text-primary" />
          Gabrielle
        </Link>

        <div className="flex items-center">
          <FaSearch className="hidden sm:block text-2xl text-primary mr-1 cursor-pointer hover:text-secondary" />
          <input
            type="text"
            placeholder="Cauta terapia dorita"
            className="hidden p-1 sm:flex text-base justify-between items-center text-accent-content transition-all ease-in w-[250px]  rounded-md mr-6 border-2 focus-visible:border-secondary outline-none"
          />
          <PiButterflyThin
            onClick={() => setShowBtnsMobile((prev: boolean) => !prev)}
            className="mr-2 text-6xl text-primary cursor-pointer hover:text-secondary"
          />
        </div>

        {showBtnsMobile && (
          <div className="absolute top-[70px] right-[10px] border-2 border-neutral-content rounded-xl w-auto h-auto p-2 flex flex-col items-center bg-base-100 z-30">
            {routesBtns.map((btn) => (
              <Link
                onClick={() => setShowBtnsMobile(false)}
                key={btn.id}
                to={btn.link}
                className="flex text-lg justify-between items-center text-neutral transition-all ease-in mb-3 w-[300px] p-2 rounded-md hover:bg-neutral hover:text-base-100"
              >
                <span className="flex items-center">
                  {changeLogo(btn.id)}
                  {btn.title}
                </span>
                <IoIosArrowForward className="text-xl" />
              </Link>
            ))}

            <div
              onClick={() => setShowTherapies((prev) => !prev)}
              className="flex text-base justify-between items-center text-neutral transition-all ease-in mb-3 cursor-pointer w-[300px] p-2 rounded-md hover:bg-neutral hover:text-base-100"
            >
              <span className="flex">
                <TbPhysotherapist className="mr-2 text-lg text-primary" />
                Terapii
              </span>
              <span>
                {showTherapies ? (
                  <IoIosArrowUp className=" text-xl" />
                ) : (
                  <IoIosArrowDown className=" text-xl" />
                )}
              </span>
            </div>

            <div className={showTherapies ? "flex flex-col pl-4" : "hidden"}>
              {therapies.map((t) => (
                <Link
                  onClick={() => setShowBtnsMobile(false)}
                  key={t.id}
                  to={`${t.link}`}
                  className="flex text-lg justify-between items-center text-neutral transition-all ease-in mb-3 w-[300px] p-2 rounded-md hover:bg-neutral hover:text-base-100"
                >
                  <span className="flex">
                    {changeLogo(t.id)}
                    {t.name}
                  </span>
                  <IoIosArrowForward className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNavbar;
