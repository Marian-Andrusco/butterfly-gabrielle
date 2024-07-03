const DespreMine = () => {
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
      </div>
    </div>
  );
};

export default DespreMine;
