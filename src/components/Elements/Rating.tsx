import ratingIcon from "../../assets/Icons/Star Icon.png";

function Rating({ rv }: { rv?: number }) {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="flex items-center">
        {Array(rv)
          .fill(rv)
          ?.map((_, i) => (
            <img key={i} src={ratingIcon} alt="rating" />
          ))}
      </div>
      <p className=" text-capR2">{rv} Reviews</p>
    </div>
  );
}

export default Rating;

export const RatingMain = ({rv}: {rv?: number}) => {
  return (
    <div className="flex items-center">
      {Array(rv)
        .fill(rv)
        ?.map((_, i) => (
          <img key={i} src={ratingIcon} className=" w-3" alt="rating" />
        ))}
    </div>
  );
};
