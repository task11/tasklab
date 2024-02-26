import Atom from "../atoms";

interface Props {
  label: string;
  isActive: boolean;
  onActive?: () => void;
}

export default function UnderlineLetter({ label, isActive, onActive }: Props) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center"
      onClick={onActive}
    >
      <span
        className={`${
          isActive ? "text-black" : "text-g300"
        } font-bold text-md py-4`}
      >
        {label}
      </span>
      <Atom.HorizontalLine
        size="full"
        variant={`${isActive ? "accent" : "disabled"}`}
      />
    </div>
  );
}
