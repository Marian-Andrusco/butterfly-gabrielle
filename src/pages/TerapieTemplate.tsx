import { Link, useNavigate, useParams } from "react-router-dom";
import { therapies, pictures } from "../../public/data";
import { useEffect, useState } from "react";
import { TTherapies, TPicturePath } from "../types/AppTypes";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

const TerapieTemplate = () => {
  const { id } = useParams();
  const [terapie, setTerapie] = useState<undefined | TTherapies>(undefined);
  const [picture, setPicture] = useState<undefined | TPicturePath>();
  const navigate = useNavigate();
  const productId = parseInt(id || "1");

  useEffect(() => {
    setTerapie(() => therapies.find((t) => t.id === Number(id)));
    setPicture(() => pictures.find((p) => p.id === Number(id)));
  }, [id]);

  const goToPreviousProduct = () => {
    if (productId >= 0) navigate(`/terapii/${productId - 1}`);
  };

  const goToNextProduct = () => {
    if (productId <= 9) navigate(`/terapii/${productId + 1}`);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center terapie pt-8">
      <div className="sm:w-3/4 w-full max-w-[1500px] flex flex-col justify-center items-center  sm:p-8 p-4 ">
        <div className="flex justify-between items-center">
          <button
            onClick={() => goToPreviousProduct()}
            disabled={productId === 0}
          >
            <IoIosArrowBack className="lg:text-[52px] text-2xl lg:mr-12 mr-4 hover:text-primary cursor-pointer" />
          </button>
          <div className="relative mb-12">
            <span className="xl:block hidden image-background w-[600px] h-[400px] border-primary absolute top-[-30px] left-[-30px] z-[-1] rounded-xl border-[12px]"></span>
            <img
              src={picture?.path}
              alt=""
              className="lg:w-[700px] lg:h-[500px]  w-full h-[400px] object-cover rounded-xl"
            />
            <span className="xl:block hidden image-background w-[600px] h-[400px] border-secondary absolute bottom-[-30px] right-[-30px] z-[-1] rounded-xl border-[12px]"></span>
          </div>
          <button onClick={() => goToNextProduct()} disabled={productId === 9}>
            <IoIosArrowForward className="lg:text-[52px] text-2xl lg:ml-12 ml-4 hover:text-secondary cursor-pointer" />
          </button>
        </div>
        <h2 className="text-primary font-bold text-3xl mb-6">
          {terapie?.name}
        </h2>
        <p className="mb-6">{terapie?.description}</p>
        <div className="mb-6 w-full flex justify-between flex-wrap">
          {terapie?.price.map((p) => (
            <div className="bg-primary text-base-100 p-4 rounded-md my-4">
              <p>{p.time * 60} minute</p>
              <hr className="my-3" />
              <p>{p.price} lei</p>
            </div>
          ))}
          <div className="bg-primary text-base-100 p-4 rounded-md my-4">
            <p>Pachet</p>
            <p>3 + 1 gratis</p>
          </div>
        </div>

        <div className="flex justify-center w-full flex-wrap">
          <Link
            to="/tarife"
            className="btn-shadow px-6 py-3 rounded-full text-primary hover:text-secondary text-center font-semibold my-4"
          >
            Toate Terapiile
          </Link>

          <a
            className="btn-shadow px-6 py-3 rounded-full text-primary hover:text-secondary text-center font-semibold flex justify-center ml-8 my-4"
            // href="https://wa.me/40769834096"
            target="_blank"
          >
            Programeaza-te
            <FaWhatsapp className="text-2xl ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TerapieTemplate;
