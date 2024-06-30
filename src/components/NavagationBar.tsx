interface NavagationBarProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  bgColor: string;
}

export default function NavigationBar({
  leftContent,
  rightContent,
  bgColor,
}: NavagationBarProps) {
  return (
    <div
      className={`${bgColor} h-12 text-sm font-bold font-titilliumWeb italic w-screen`}
    >
      <div className="flex items-center justify-between mx-8 h-12">
        <div className="flex items-center gap-4">{leftContent}</div>
        <div className="flex items-center gap-4">{rightContent}</div>
      </div>
    </div>
  );
}
