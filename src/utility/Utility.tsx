// Icons
import { GiBowenKnot, GiStomach, GiFootprint } from "react-icons/gi";
import {
  FaHome,
  FaAmericanSignLanguageInterpreting,
  FaUniversalAccess,
} from "react-icons/fa";
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

export const changeLogo = (id: number, styles: object): JSX.Element => {
  let logo = <GiBowenKnot style={styles} />;
  switch (id) {
    case 0:
      logo = <FaUniversalAccess style={styles} />;
      break;
    case 1:
      logo = <MdHealthAndSafety style={styles} />;
      break;
    case 2:
      logo = <TbMassage style={styles} />;
      break;
    case 3:
      logo = <RiPsychotherapyLine style={styles} />;
      break;
    case 4:
      logo = <AiFillSkin style={styles} />;
      break;
    case 5:
      logo = <MdBloodtype style={styles} />;
      break;
    case 6:
      logo = <FaBrain style={styles} />;
      break;
    case 7:
      logo = <FaAmericanSignLanguageInterpreting style={styles} />;
      break;
    case 8:
      logo = <GiStomach style={styles} />;
      break;
    case 9:
      logo = <GiFootprint style={styles} />;
      break;
    case 100:
      logo = <FaHome style={styles} />;
      break;
    case 101:
      logo = <SiJasmine style={styles} />;
      break;
    case 102:
      logo = <MdPermContactCalendar style={styles} />;
      break;
    case 103:
      logo = <MdUnsubscribe style={styles} />;
      break;
    default:
      logo = <GiBowenKnot style={styles} />;
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
