import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { therapies } from "../../public/data";

const Tarife = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="max-w-[1500px] sm:w-3/4 w-full flex flex-col sm:p-8 p-4">
        <h2 className="text-4xl text-primary mb-6 font-semibold text-center ">
          Tarife si Abonamente
        </h2>
        <table className=" bg-base-200 mb-6">
          <thead className="bg-primary text-base-100">
            <tr>
              <th className="p-3 text-start">Masaje</th>
              <th className="p-3 text-start">60 min</th>
              <th className="p-3 text-start">90 min</th>
              <th className="p-3 text-start">120 min</th>
            </tr>
          </thead>
          <tbody>
            {therapies.map(
              (t) =>
                t.type === "M" && (
                  <tr
                    className={t.id % 2 == 0 ? "bg-base-100" : "bg-base-200"}
                    key={t.id}
                  >
                    <td className="p-3 text-start ">
                      <Link
                        to={t.link}
                        className="flex items-center hover:text-secondary"
                      >
                        {t.name} <IoIosArrowForward className="text-xl ml-3" />
                      </Link>
                    </td>
                    <td className="p-3 text-start">
                      {t.price[0].price ? `${t.price[0].price} ron` : "-"}
                    </td>
                    <td className="p-3 text-start">
                      {t.price[1].price ? `${t.price[1].price} ron` : "-"}
                    </td>
                    <td className="p-3 text-start">
                      {t.price[2].price ? `${t.price[2].price} ron` : "-"}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>

        <table className=" bg-base-200 mb-6">
          <thead className="bg-primary text-base-100">
            <tr>
              <th className="p-3 text-start">Terapii</th>
              <th className="p-3 text-start">60 min</th>
            </tr>
          </thead>
          <tbody>
            {therapies.map(
              (t) =>
                t.type === "T" && (
                  <tr
                    className={t.id % 2 == 0 ? "bg-base-100" : "bg-base-200"}
                    key={t.id}
                  >
                    <td className="p-3 text-start ">
                      <Link
                        to={t.link}
                        className="flex items-center hover:text-secondary"
                      >
                        {t.name} <IoIosArrowForward className="text-xl ml-3" />
                      </Link>
                    </td>
                    <td className="p-3 text-start">{t.price[0].price}ron</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tarife;
