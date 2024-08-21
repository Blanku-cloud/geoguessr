interface WaysToLoginProps {
  formsLogin: {
    from: string;
    logo: React.ReactNode;
    color: string;
    textColor: string;
    border: boolean;
  }[];
}

export default function WaysToLogin({ formsLogin }: WaysToLoginProps) {
  return formsLogin.map((e, index) => (
    <button
      key={index}
      className={`
        hover:scale-105 font-bold
        w-80 flex justify-center items-center h-10 rounded-full ${
          e.color
        } text-white ${e.border && "border border-slate-400"}`}
    >
      <span className="flex justify-center items-center w-6">{e.logo}</span>
      <span className={`ml-2 ${e.textColor}`}>continue with {e.from}</span>
    </button>
  ));
}
