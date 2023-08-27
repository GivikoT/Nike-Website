import { useNavigate } from "react-router-dom";
import star from "../images/icons/star.svg";
import DetailPage from "../sections/DetailPage/DetailPage";
import { DETAIL_PAGE } from "../constants/routes";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        onClick={() => navigate(`/${name}`)}
        className="w-[280px] h-[280px] cursor-pointer hover:scale-105 hover:opacity-100 transition duration-300 shadow-md hover:shadow-lg hover:rotate-3 transform-origin-center"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
