interface GreyButtonProps {
  children: React.ReactNode;
}

export default function GreyButton({ children }: GreyButtonProps) {
  return (
    <button className="bg-gray-700 text-white rounded-full  py-1.5 px-4">
      {children}
    </button>
  );
}
