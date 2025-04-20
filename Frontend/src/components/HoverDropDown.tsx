interface HoverDropDownProps {
  title: string;
  element: React.ReactNode;
}

export default function HoverDropDown({title, element}: HoverDropDownProps) {
  return (
    <div className="text-white group">
      <div className="cursor-pointer relative text-lg">{title}</div>
      <div className="flex absolute top-[4.5rem] w-72 flex-col group-hover:scale-y-100 opacity-0 scale-y-0 transform group-hover:opacity-100 transition-all duration-200 bg-black rounded-lg origin-top">
        {element}
      </div>
    </div>
  );
}
