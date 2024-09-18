import { useContext } from "react";
import { sidebarCollapse } from "../../App";
import { TDesktopNavbarProp } from "../../types/AppTypes";
// Icons
import { GiButterfly } from "react-icons/gi";
import { FaBackward, FaForward, FaSearch } from "react-icons/fa";
import { TbPhysotherapist } from "react-icons/tb";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { PiButterflyThin } from "react-icons/pi";
// import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { changeLogo } from "../../utility/Utility";
import { routesBtns, therapies } from "../../../public/data";

const DesktopNavbar = ({
  showTherapies,
  setShowTherapies,
}: TDesktopNavbarProp) => {
  const { colappse, setColappse } = useContext(sidebarCollapse);
  const styles = {
    fontSize: "20px",
    color: "00b4d8",
  };
  return (
    <>
      <div className=" w-full h-screen bg-base-100 flex flex-col justify-between items-center p-6 sticky top-0 shadow-lg">
        <div className="w-full">
          <div className="flex text-4xl justify-center text-neutral mb-6 items-center">
            {colappse ? (
              ""
            ) : (
              <Link to="/" className="flex mr-12">
                <GiButterfly className="mr-2 text-4xl text-primary" />
                Gabrielle
              </Link>
            )}

            {colappse ? (
              <FaForward
                className="text-2xl cursor-pointer hover:text-secondary"
                onClick={() =>
                  setColappse && setColappse((prev: boolean) => !prev)
                }
              />
            ) : (
              <FaBackward
                className="text-2xl cursor-pointer hover:text-secondary"
                onClick={() =>
                  setColappse && setColappse((prev: boolean) => !prev)
                }
              />
            )}
          </div>

          {colappse ? (
            ""
          ) : (
            <div className="flex justify-between items-center mb-6">
              <FaSearch className="text-xl text-primary cursor-pointer hover:text-secondary" />
              <input
                type="text"
                placeholder="Cauta terapia dorita"
                className="p-1 flex text-base justify-between items-center text-neutral transition-all ease-in w-[90%]  rounded-md border-2 focus-visible:border-secondary outline-none"
              />
            </div>
          )}

          {routesBtns.map((btn) => (
            <Link
              key={btn.id}
              to={btn.link}
              className={
                colappse
                  ? "flex text-lg justify-center items-center text-neutral transition-all ease-in mb-3 p-2 rounded-md hover:bg-neutral hover:text-base-100"
                  : "flex text-lg justify-between items-center text-neutral transition-all ease-in mb-3 p-2 rounded-md hover:bg-neutral hover:text-base-100"
              }
            >
              {colappse ? (
                <>{changeLogo(btn.id, styles)}</>
              ) : (
                <>
                  <span className="flex">
                    <span
                      className={
                        colappse
                          ? "mr-0 flex  items-center justify-center"
                          : "mr-2 flex items-center justify-center"
                      }
                    >
                      {changeLogo(btn.id, styles)}
                    </span>
                    {btn.title}
                  </span>
                  <IoIosArrowForward className="text-xl" />
                </>
              )}
            </Link>
          ))}

          <div
            onClick={() => setShowTherapies((prev) => !prev)}
            className={
              colappse
                ? "flex text-base justify-center items-center text-neutral transition-all ease-in mb-3 cursor-pointer p-2 rounded-md hover:bg-neutral hover:text-base-100"
                : "flex text-base justify-between items-center text-neutral transition-all ease-in mb-3 cursor-pointer p-2 rounded-md hover:bg-neutral hover:text-base-100"
            }
          >
            {colappse ? (
              <>
                <TbPhysotherapist className="mr-2 text-lg text-primary" />
              </>
            ) : (
              <>
                <span className="flex text-lg items-center">
                  <TbPhysotherapist className="mr-2 text-lg text-primary" />
                  Terapii & Masaje
                </span>
                <span>
                  {showTherapies ? (
                    <IoIosArrowUp className=" text-xl" />
                  ) : (
                    <IoIosArrowDown className=" text-xl" />
                  )}
                </span>
              </>
            )}
          </div>

          <div className={showTherapies ? "flex flex-col" : "hidden"}>
            {therapies.map((t) => (
              <Link
                key={t.id}
                to={`${t.link}`}
                className={
                  colappse
                    ? "flex text-lg justify-center items-center text-neutral transition-all ease-in mb-3 p-2 rounded-md hover:bg-neutral hover:text-base-100"
                    : "flex text-lg justify-between items-center text-neutral transition-all ease-in mb-3 p-2 rounded-md hover:bg-neutral hover:text-base-100 pl-3"
                }
              >
                {colappse ? (
                  <>{changeLogo(t.id, styles)}</>
                ) : (
                  <>
                    <span className="flex">
                      <span
                        className={
                          colappse
                            ? "mr-0 flex  items-center justify-center"
                            : "mr-2 flex items-center justify-center"
                        }
                      >
                        {changeLogo(t.id, styles)}
                      </span>
                      {t.name}
                    </span>
                    <IoIosArrowForward className="text-xl" />
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>

        <PiButterflyThin className="mr-2 text-6xl text-primary" />
      </div>
    </>
  );
};

export default DesktopNavbar;
