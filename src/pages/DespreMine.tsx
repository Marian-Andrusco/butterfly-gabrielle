const DespreMine = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] flex flex-col justify-center items-center bg-black/[.2] text-base-100">
        <img
          src="images/14.jpg"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 right-0 z-[-1] grayscale-[20%] "
        />

        <div className="sm:w-3/4 w-full max-w-[1500px] flex flex-col justify-center sm:items-start items-center sm:px-8 px-4">
          <h1 className="text-6xl text-primary mb-3 font-semibold sm:text-start text-center">
            Relaxare Supremă, Răsfăț Total
          </h1>
          <p className="text-xl mb-6 font-medium">
            Experimentează arta masajului profesionist pentru minte, corp și
            suflet. Programează-te acum pentru o evadare de neuitat.
          </p>
        </div>
      </div>

      {/* Who I am */}
      <div className="w-full bg-base-100 flex justify-center items-center">
        <div className=" max-w-[1500px] grid xl:grid-cols-2 grid-cols-1 sm:w-3/4 w-full sm:p-8 p-4 gap-10">
          <div className="col-span-1">
            <img src="images/8.jpg" alt="" className="rounded-2xl" />
          </div>
          <div className="flex flex-col justify-between rounded-2xl col-span-1 sm:p-8 bg-base-200 p-3">
            <div>
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
                repudiandae fugiat soluta laboriosam eaque voluptatibus
                obcaecati tempora eius cum, quo voluptate ut voluptas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespreMine;
