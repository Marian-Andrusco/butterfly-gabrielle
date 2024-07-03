const DespreMine = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] flex flex-col justify-center items-start sm:p-16 p-8 text-base-100 bg-black/[.2]">
        <img
          src="images/15.jpg"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 right-0 z-[-1] grayscale-[20%] "
        />
        <h3 className="text-6xl text-primary mb-3 font-semibold ">
          Gabrielle's Terapies
        </h3>
        <p className="text-xl mb-6 md:w-full sm:w-[500px] font-medium">
          Este o maseuză cu suflet bun, a cărei atingere blândă și natură
          compasionată creează un sanctuar de vindecare și relaxare. Cu un
          zâmbet cald și dorința sinceră de a ajuta, fiecare sesiune este o
          călătorie restauratoare pentru corp și suflet.
        </p>
      </div>
    </div>
  );
};

export default DespreMine;
