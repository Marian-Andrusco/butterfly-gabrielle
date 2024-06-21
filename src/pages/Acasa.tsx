// import { pictures } from "../../public/data";
// import Carousel from "../components/Navbar/Carousel";
import { FaWhatsapp } from "react-icons/fa";

const Acasa = () => {
  // const threePictures = pictures.slice(0, 4);

  return (
    // <div className="relative">
    //   <div className="w-full h-[500px]">
    //     <Carousel slides={threePictures} />
    //   </div>
    // </div>
    <div className="relative w-full h-[700px] flex flex-col justify-center items-center">
      <img
        src="images/1.jpg"
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0 right-0 z-[-1]"
      />
      <h1>Relaxare Supremă, Răsfăț Total</h1>
      <p>
        Experimentează arta masajului profesionist pentru minte, corp și suflet.
        Programează-te acum pentru o evadare de neuitat.
      </p>
      <a
        href="https://wa.me/40769834096"
        target="_blank"
        className="flex items-center"
      >
        Contactează-mă <FaWhatsapp className="ml-3" />
      </a>
    </div>
  );
};

export default Acasa;
