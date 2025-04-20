import { PopupProps } from "../types/types";

export default function Popup({ message, logo, closeButton }: PopupProps) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-off-black w-[28rem] text-gray-400 text-center rounded-xl p-4 min-h-60	font-titilliumWeb z-50 flex flex-col justify-center">
      <div className="flex justify-center">{logo}</div>
      <div className="my-3">
        <p className="whitespace-pre-line uppercase">{message}</p>
      </div>
      <div className="">{closeButton}</div>
    </div>
  );
}
