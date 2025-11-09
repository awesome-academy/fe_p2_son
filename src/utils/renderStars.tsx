import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export function renderStars(rating: number) {
  const stars = [];

  const fullStars = Math.floor(rating);

  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(<FaRegStarHalfStroke key="half" className="text-yellow-400" />);
  }

  return <div className="flex items-center gap-1">{stars}</div>;
}
