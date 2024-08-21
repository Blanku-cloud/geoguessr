interface GreenButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  height?: string;
  fontSize: string;
  paddingX: string;
  paddingY: string;
}

export default function GreenButton({
  children,
  onClick,
  paddingX,
  paddingY,
}: GreenButtonProps) {
  return (
    <button
      className={`bg-green-600 shadow-green-200 text-white rounded-full ${paddingX} ${paddingY}`}
      onClick={onClick}
    >
      <div className="text-base">{children}</div>
    </button>
  );
}
