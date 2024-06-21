// Icons
import { GiBowenKnot } from "react-icons/gi";
import { FaHome, FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { RiPsychotherapyLine } from "react-icons/ri";
import {
  MdBloodtype,
  MdHealthAndSafety,
  MdPermContactCalendar,
  MdUnsubscribe,
} from "react-icons/md";
import { AiFillSkin } from "react-icons/ai";
import { FaBrain } from "react-icons/fa6";
import { SiJasmine } from "react-icons/si";
import { useEffect, useState } from "react";

export const changeLogo = (id: number): JSX.Element => {
  let logo = <GiBowenKnot className=" text-xl text-primary" />;
  switch (id) {
    case 1:
      logo = <MdHealthAndSafety className=" text-xl text-primary" />;
      break;
    case 2:
      logo = <TbMassage className=" text-xl text-primary" />;
      break;
    case 3:
      logo = <RiPsychotherapyLine className=" text-xl text-primary" />;
      break;
    case 4:
      logo = <AiFillSkin className=" text-xl text-primary" />;
      break;
    case 5:
      logo = <MdBloodtype className=" text-xl text-primary" />;
      break;
    case 6:
      logo = <FaBrain className=" text-xl text-primary" />;
      break;
    case 7:
      logo = (
        <FaAmericanSignLanguageInterpreting className=" text-xl text-primary" />
      );
      break;
    case 100:
      logo = <FaHome className=" text-xl text-primary" />;
      break;
    case 101:
      logo = <SiJasmine className=" text-xl text-primary" />;
      break;
    case 102:
      logo = <MdPermContactCalendar className=" text-xl text-primary" />;
      break;
    case 103:
      logo = <MdUnsubscribe className=" text-xl text-primary" />;
      break;
    default:
      logo = <GiBowenKnot className=" text-xl text-primary" />;
      break;
  }

  return logo;
};

export const useResize = () => {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setMobileNavbar(true);
    } else {
      setMobileNavbar(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return { mobileNavbar };
};
