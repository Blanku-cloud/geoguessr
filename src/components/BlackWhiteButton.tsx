interface BlackWhiteButtonProps {
  children: React.ReactNode;
}

export default function BlackWhiteButton({ children }: BlackWhiteButtonProps) {
  return (
    <button className="bg-black text-white border-x	border-y rounded-full border-white py-1.5 px-4	">
      {children}
    </button>
  );
}
