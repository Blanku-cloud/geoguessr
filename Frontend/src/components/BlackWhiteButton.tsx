interface BlackWhiteButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
}

export default function BlackWhiteButton({ children, handleClick }: BlackWhiteButtonProps) {
  return (
    <button className="bg-black text-white border-x	border-y rounded-full border-white py-1.5 px-4" onClick={handleClick}>
      {children}
    </button>
  );
}
