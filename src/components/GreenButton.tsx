interface GreenButtonProps {
  children: React.ReactNode;
}

export default function GreenButton({ children }: GreenButtonProps) {
  return (
    <button className="bg-green-600 shadow-green-200 text-white rounded-full py-1.5 px-4	">
      {children}
    </button>
  );
}
