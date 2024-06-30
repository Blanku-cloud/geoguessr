interface DropdownProps {
  // what are the type of the selection box
  type: string;
  // defualt text of the dropdown
  selections: Array<string>;
  // logo infront of the dropdown
  logo: React.ReactNode;
  // looks of down arrow
  downarrow: React.ReactNode;
  // if text should be italic
  italic: boolean;
  // if langauge has been changed
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Dropdown({
  type,
  selections,
  logo,
  downarrow,
  italic,
  onChange,
}: DropdownProps) {
  const selection = selections.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  return (
    <div className={`flex items-center gap-2 text-white `}>
      <div className="relative">
        <select
          name={type}
          onChange={onChange}
          className={`appearance-none bg-off-black text-gray-400 outline-none text-center px-7 w-full uppercase cursor-pointer ${
            italic ? "italic" : ""
          }`}
        >
          {selection}
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <div className="text-gray-500 not-italic text-base">{logo}</div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <div className="text-gray-500 not-italic text-base">{downarrow}</div>
        </div>
      </div>
    </div>
  );
}
