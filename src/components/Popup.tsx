

interface PopupProps {
  // what the popup is going to say
  message: string;
  // logo on top of the popup
  logo: React.ReactNode;
  // close button
  closeButton: React.ReactNode;
}

export default function Popup({ message, logo, closeButton }: PopupProps) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-off-black w-[28rem] text-gray-400 text-center rounded-lg p-4 min-h-60	font-titilliumWeb">
      <div className=" flex justify-center items-center">{logo}</div>
      <div className="my-3">
        <p className="whitespace-pre-line uppercase">{message}</p>
      </div>
      {closeButton}
    </div>
  );
}
