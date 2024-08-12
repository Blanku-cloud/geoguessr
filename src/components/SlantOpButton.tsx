interface SlantOpButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

export default function SlantOpButton({
  children,
  handleClick,
}: SlantOpButtonProps) {
  return (
    <div
      className="relative flex items-center justify-centerpointer group z-20"
      onClick={handleClick}
    >
      <button className="relative overflow-hidden inline-flex text-white z-10 mx-4 items-center">
        <span className="flex justify-center items-center">{children}</span>
      </button>
      <div className="-skew-x-[15deg] h-12 absolute bg-black/30 w-full left-0 rounded-l-md rounded-r-md group-hover:bg-gray-400/60 z-20 overflow-hidden"></div>
    </div>
  );
}
