interface MessageBoxProps {
  color: string;
  message: string;
  logo: React.ReactNode;
}

export default function MessageBox({ color, message, logo }: MessageBoxProps) {
  return (
    <div
      className={`border-2 border-[${color}] flex flex-col items-center w-full bg-zinc-900 text-white min-h-14 p-4 rounded-lg text-sm gap-2`}
    >
      {logo}
      <div>{message}</div>
    </div>
  );
}
