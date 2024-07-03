import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { therapies, reviews, faqs } from "../../public/data";
import { Link } from "react-router-dom";
import { changeLogo } from "../utility/Utility";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Acasa = () => {
  const [showHideFqa, setshowHideFqa] = useState<null | number>(null);

  const toggleOpenCloseFAQ = (id: number) => {
    if (showHideFqa === id) {
      setshowHideFqa(null);
    }
    setshowHideFqa(id);
  };

  const styles = {
    fontSize: "48px",
    color: "6900FF",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full justify-center">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] flex flex-col justify-center items-center sm:p-16 p-8">
        <img
          src="images/15.jpg"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 right-0 z-[-1] grayscale-[20%] "
        />
        <h1 className="text-6xl text-primary mb-3 font-semibold text-center">
          Relaxare Supremă, Răsfăț Total
        </h1>
        <p className="text-xl mb-6 lg:max-w-[700px] sm:max-w-[500px] text-secondary">
          Experimentează arta masajului profesionist pentru minte, corp și
          suflet. Programează-te acum pentru o evadare de neuitat.
        </p>
        <a
          // href="https://wa.me/40769834096"
          target="_blank"
          className="flex items-center px-[20px] py-[10px] bg-base-100 hover:text-secondary cursor-pointer rounded-md text-neutral shadow-lg btn-shadow"
        >
          Contactează-mă <FaWhatsapp className="ml-3 text-primary text-xl" />
        </a>
      </div>

      {/* Who I am */}
      <div className="w-full p-8 bg-base-100 flex justify-center items-center">
        <div className="flex w-3/4 justify-center gap-8 flex-wrap">
          <img
            src="images/8.jpg"
            alt=""
            className="rounded-2xl lg:w-[500px] md:w-[400px] w-[300px]"
          />
          <div className="rounded-2xl lg:w-[500px] md:w-[400px] w-[300px] ">
            <h3 className="text-2xl text-primary mb-3 font-semibold text-center">
              Cine este Gabrielle?
            </h3>
            <p className="text-base mb-6 w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              harum quam similique eligendi quia consectetur autem deserunt
              voluptates dignissimos sapiente, molestias quo inventore
              provident, temporibus numquam quibusdam architecto ducimus quos.
              Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta
              provident illum sunt. Aliquam, accusamus aliquid ducimus
              repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati
              tempora eius cum, quo voluptate ut voluptas!
            </p>
            <Link
              to="/despreMine"
              className="flex items-center justify-center px-[20px] py-[10px] bg-base-100 hover:text-secondary cursor-pointer rounded-md text-neutral shadow-lg btn-shadow"
            >
              Afla mai multe
              <IoIosArrowForward className="text-xl ml-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Therapies Section */}
      <div className="w-full sm:pt-24 sm:p-16 pt-24 p-8 bg-base-200 flex justify-center items-center">
        <div className="sm:w-3/4 w-full grid 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-y-24 gap-x-10">
          {therapies.map((t) => (
            <div
              key={t.id}
              className="box-shadow flex flex-col gap-3 items-center rounded-2xl relative p-3"
            >
              <span className="box-shadow rounded-full p-6 absolute top-[-68px] left-[50%-58px] right-[50%-58px]">
                {changeLogo(t.id, styles)}
              </span>
              <h2 className="mt-[68px] text-xl font-semibold">{t.name}</h2>
              <p className=" h-[200px] overflow-hidden">{t.shortDescription}</p>
              <Link
                to={t.link}
                className="btn-shadow px-6 py-3 rounded-full text-primary hover:text-secondary text-center"
              >
                Vreau {t.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Background Section */}
      <div className="w-full h-[25vh] bg-center bg-repeat sm:p-16 p-8 object-cover bg-fixed bg-fixed-home-page flex justify-center items-center">
        <p className="text-base-200 text-lg font-semibold sm:w-3/4 w-full p-3 rounded-2xl bg-neutral">
          Mâinile care oferă masaj nu doar alină durerea corpului, ci și
          liniștesc sufletul și împrospătează mintea.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="w-full flex justify-center items-center h-auto sm:p-16  p-8 bg-base-200">
        <div className="sm:w-3/4 w-full rounded-2xl">
          <Slider {...settings}>
            {reviews.map((r) => (
              <div
                key={r.id}
                className="relative text-neutral bg-base-100  p-3"
              >
                <div className="flex justify-center items-center bg-base-100 ">
                  <RxAvatar className="text-[66px] text-primary" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold h-[50px]">{r.name}</p>
                  <p className="xl:h-[200px] h-[250px] overflow-auto">
                    {r.review}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full flex flex-col justify-center items-center h-auto sm:p-16  p-8 bg-base-100">
        {faqs &&
          faqs.map((f) => (
            <div key={f.id} className=" mb-3 sm:w-3/4 w-full text-base-100">
              <p
                onClick={() => toggleOpenCloseFAQ(f.id)}
                className="cursor-pointer bg-primary p-6 rounded-tl-[60px] rounded-br-[60px]"
              >
                {f.question}
              </p>
              <p
                className={
                  showHideFqa === f.id
                    ? "block bg-base-200 p-6 rounded-tr-[60px] rounded-bl-[60px] text-neutral"
                    : "hidden"
                }
              >
                {f.answer}
              </p>
            </div>
          ))}
      </div>

      {/* Footer Section */}
      <div className="w-full flex flex-col justify-center items-center h-auto sm:p-16  p-8 bg-neutral text-base-100">
        <div className="sm:w-3/4 w-full grid md:grid-cols-2 grid-cols-1">
          <ul>
            <li className="mb-3">Contact: Gingu Gabriela</li>
            <li className="mb-3">
              Telefon: <a href="tel:+40723569510">0723569510</a>
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
          <div></div>
        </div>
      </div>
      <p className="w-full text-center bg-base-300 text-neutral">
        Website created by: <span className="text-primary">Owl Sight SRL</span>
      </p>
    </div>
  );
};

export default Acasa;
