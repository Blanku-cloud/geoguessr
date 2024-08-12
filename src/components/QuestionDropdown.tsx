import PlusSVG from "./PlusSVG";
import MinusSVG from "./MinusSVG";
import React, { useState } from "react";

interface QestionDropdownProp {
  title: string;
  text: string;
  button?: React.ReactNode;
}

export default function QestionDropdown({
  title,
  text,
  button,
}: QestionDropdownProp) {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  return (
    <div className="w-[60rem] bg-off-black p-7 rounded-md m-3">
      <div className="cursor-pointer " onClick={onClick}>
        <h5 className="flex text-2xl justify-between items-center">
          {title} {click ? <MinusSVG /> : <PlusSVG />}
        </h5>
      </div>

      {click && (
        <div className="border-t-2 border-gray-600 mt-3 pt-3 flex flex-col items-center">
          <p>{text}</p>
          {button}
        </div>
      )}
    </div>
  );
}
