import StarSVG from "./StarSVG";

interface LandingCarouselCardProps {
  message: string;
  numStar: number;
  date: string;
  name: string;
}

export default function LandingCarouselCard({
  message,
  numStar,
  date,
  name,
}: LandingCarouselCardProps) {
  const yellowStars: React.ReactNode[] = [];
  const greyStars: React.ReactNode[] = [];
  const totalStars = 5;
  for (let i = 0; i < numStar; ++i) {
    yellowStars.push(<StarSVG color="#FECD19" key={i} />);
  }
  for (let i = 0; i < totalStars - numStar; ++i) {
    greyStars.push(<StarSVG color="#808080" key={totalStars - i} />);
  }

  return (
    <div className="backdrop-opacity-15 backdrop-invert bg-black/60 min-h-40 w-5/12 text-white rounded-[1rem] px-8 py-3 ">
      <p className="min-h-20">{message}</p>
      <div className="flex my-2">
        {yellowStars}
        {greyStars}
      </div>
      <p>
        {name}, {date}
      </p>
    </div>
  );
}
