import { useState, useEffect } from "react";
import { FaBackward, FaForward } from "react-icons/fa";
import { TPicturePath } from "../../types/AppTypes";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 1000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: TPicturePath[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative ">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img src={img.path} className="h-full" key={img.id} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="">
          <FaBackward className="text-2xl cursor-pointer text-base-100 hover:text-secondary transition-all ease-linear duration-300" />
        </button>
        <button onClick={next} className="">
          <FaForward className="text-2xl cursor-pointer text-base-100  hover:text-secondary transition-all ease-linear duration-300" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.slice(0, 3).map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
