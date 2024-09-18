import { useParams } from "react-router-dom";
import { therapies, pictures } from "../../public/data";
import { useEffect, useState } from "react";
import { TTherapies, TPicturePath } from "../types/AppTypes";

const TerapieTemplate = () => {
  const { id } = useParams();
  const [terapie, setTerapie] = useState<undefined | TTherapies>(undefined);
  const [picture, setPicture] = useState<undefined | TPicturePath>();

  useEffect(() => {
    setTerapie(() => therapies.find((t) => t.id === Number(id)));
    setPicture(() => pictures.find((p) => p.id === Number(id)));
  }, [id]);

  return (
    <div className="flex flex-col w-full justify-center items-center error">
      <div className="sm:w-3/4 w-full max-w-[1500px] flex flex-col justify-center items-center sm:px-8 px-4">
        <img src={picture?.path} alt="" className="" />

        <h2>{terapie?.name}</h2>
      </div>
    </div>
  );
};

export default TerapieTemplate;
