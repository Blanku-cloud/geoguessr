import React from "react";

interface LandingTextImage {
  title: string;
  text: string;
  src: string;
  index: number;
  border: boolean;
  button?: React.ReactNode;
}

export default function LandingTextImage({
  title,
  text,
  src,
  index,
  border,
  button,
}: LandingTextImage) {
  const isEven: () => boolean = () => {
    if (index % 2 === 0) {
      return true;
    }
    return false;
  };
  return (
    <div
      className={` text-white flex h-72 w-[60rem] ${
        isEven() && "flex-row-reverse"
      } py-8 ${border && "border-b-[1px] border-gray-600"} `}
    >
      <div className="px-20 py-12">
        <h5 className="text-3xl font-bold mb-5">{title}</h5>
        <p className="text-lg">{text}</p>
        <div className="mt-3">{button}</div>
      </div>
      <div className="flex justify-center items-center">
        <img className=" " src={src} />
      </div>
    </div>
  );
}
