import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-auto  bg-base-300 text-black">
        <div className="max-w-[1500px] sm:w-3/4 w-full grid md:grid-cols-3 grid-cols-1 sm:p-8 p-4 ">
          <ul className="grid-cols-1 md:mb-0 md:mr-3 mb-8">
            <li className="mb-5 text-xl font-semibold">
              <h4>Contact</h4>
            </li>
            <li className="mb-3">Name: Gingu Gabriela</li>
            <li className="mb-3 ">
              Telefon:{" "}
              <a href="tel:+40723569510" className="hover:text-secondary">
                0723569510
              </a>
            </li>
            <li className="flex w-full">
              <a href="#" className="mr-3 text-lg hover:text-secondary">
                <FaFacebook />
              </a>
              <a href="#" className="mr-3 text-lg hover:text-secondary">
                <FaInstagram />
              </a>
              <a href="#" className="mr-3 text-lg hover:text-secondary">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-lg hover:text-secondary">
                <FaTiktok />
              </a>
            </li>
          </ul>

          <ul className="grid-cols-1 md:mb-0 md:mr-3 mb-8">
            <li className="mb-5 text-xl font-semibold">
              <h4>Terapi Populare</h4>
            </li>
            <li className="mb-3 w-full ">
              <Link to="/terapii/6" className="hover:text-secondary">
                Masaj Terapeutic
              </Link>
            </li>
            <li className="mb-3 w-full ">
              <Link to="/terapii/8" className="hover:text-secondary">
                Masaj Visceral
              </Link>
            </li>
            <li className="mb-3 w-full ">
              <Link to="/terapii/9" className="hover:text-secondary">
                Reflexoterapie
              </Link>
            </li>
            <li className="mb-3 w-full ">
              <Link to="/terapii/1" className="hover:text-secondary">
                Bowen
              </Link>
            </li>
          </ul>

          <ul className="grid-cols-1 md:mb-0 mb-8">
            <li className="mb-5 text-xl font-semibold">
              <h4>Importanta Masajului</h4>
            </li>
            <li className="w-full ">
              <p>
                Masajul îmbunătățește circulația sanguină și flexibilitatea,
                contribuind la prevenirea durerilor musculare și articulare.
                Prin includerea masajului în programul săptămânal, vă veți
                bucura de o minte mai clară și un corp mai relaxat.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className="w-full text-center text-neutral">
        Website created by: <span className="text-primary">BlackNexus</span>
      </p>
    </>
  );
};

export default Footer;
