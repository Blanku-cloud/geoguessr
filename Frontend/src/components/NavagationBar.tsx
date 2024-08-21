interface NavagationBarProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  bgColor: string;
  height: string;
}

export default function NavigationBar({
  leftContent,
  rightContent,
  bgColor,
  height,
}: NavagationBarProps) {
  return (
    <div
      className={`${bgColor} ${height} text-sm font-bold font-titilliumWeb italic w-screen grid items-center`}
    >
      <div className={`flex items-center justify-between mx-8 h-12`}>
        <div className="flex items-center gap-4">{leftContent}</div>
        <div className="flex items-center gap-4">{rightContent}</div>
      </div>
    </div>
  );
}
