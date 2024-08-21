import GeoLogo from "./GeoLogo";
import GreenButton from "./GreenButton";
import { Link } from "react-router-dom";
import CarouselCard from "./LandingCarouselCard";

interface LandingMainProps {
  color: string;
}

export default function LandingMain({ color }: LandingMainProps) {
  return (
    <>
      <div className="bg-cover bg-center bg-hero w-full h-[90vh] flex flex-col gap-44 justify-center items-center font-titilliumWeb relative">
        <div className="w-[50rem] flex flex-col justify-center min-h-64 items-center gap-3">
          <div className="">
            <div className="text-white uppercase text-center font-bold flex flex-col items-center m-2">
              <GeoLogo color={color} />
              <div className="flex flex-col justify-center items-center gap-5 ">
                <h1 className="text-7xl italic landing-shadow w-fit">
                  Explore the world!
                </h1>
                <div className="landing-shadow text-base">
                  <p>
                    Get dropped anywhere from the busy streets of New York to
                    the beautiful beaches of Bali.
                  </p>
                  <p>Join 70 million players now!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <GreenButton height="h-16" paddingX="px-5" paddingY="py-1" className="" fontSize="text-base">
              <Link to="/" className="font-bold text-2xl landing-shadow p-5">
                PLAY NOW
              </Link>
            </GreenButton>
          </div>
        </div>

        {/* single for now can come back later for full functionality */}
        
        <CarouselCard
          message="I am in love with GeoGussr. It has benfitted me greatly in understand
        the world geography. I never knew the world was such an intresting
        place. I love monkeys."
          numStar={4}
          date="7/1/2024"
          name="Hao Ran Chen"
        />
      </div>
      <div className="bg-landing-map h-[17rem] w-[22rem] bg-cover bg-center absolute bottom-0 right-0 md:absolute md:bottom-0 md:right-0"></div>
    </>
  );
}
