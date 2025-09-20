interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { className, label, onClick } = props;

  const afterClasses =
    "after:bg-valorant-red after:absolute after:w-4 after:h-4 after:border-white after:border-l-2 after:-bottom-[9px] after:-right-[9px] after:rotate-45";
  const beforeClasses =
    "before:bg-valorant-red before:absolute before:w-4 before:h-4 before:border-white before:border-r-2 before:-top-[9px] before:-left-[9px] before:rotate-45";

  return (
    <button
      className={`cursor-pointer relative p-4 border-2 border-white text-white font-monument ${afterClasses} ${beforeClasses} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
