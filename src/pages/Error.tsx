import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center error">
      <div className="sm:w-3/4 w-full max-w-[1500px] flex flex-col justify-center items-center sm:px-8 px-4">
        <h3 className="text-2xl mb-8">
          Pagina cautata nu este disponibila, intoarce-te:
        </h3>
        <Link
          to="/"
          className="btn-shadow text-xl px-6 py-3 rounded-full text-primary hover:text-secondary text-center font-semibold"
        >
          Acasa
        </Link>
      </div>
    </div>
  );
};

export default Error;
