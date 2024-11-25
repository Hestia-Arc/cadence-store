import ratingIcon from "../../assets/Icons/Star Icon.png";

function Rating() {
  return (
    <div className="flex items-center gap-[10px]">
          <div className="flex items-center">
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
          </div>
          <p className=" text-capR2">11 Reviews</p>
        </div>
  )
}

export default Rating