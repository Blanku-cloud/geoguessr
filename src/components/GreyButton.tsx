interface GreyButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  height?: string;
  fontSize: string;
  paddingX: string;
  paddingY: string;
}

export default function GreyButton({
  children,
  fontSize,
  paddingX,
  paddingY,
}: GreyButtonProps) {
  return (
    <button
      className={`bg-gray-700 text-white rounded-full  py-1.5 px-4 fontSize ${fontSize} ${paddingX} ${paddingY}`}
    >
      {children}
    </button>
  );
}
