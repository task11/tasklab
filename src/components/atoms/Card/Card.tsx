import { VARIANTS } from "./Card.variant";

interface Props {
  variant: "default" | "disabled";
  children: React.ReactNode;
}

export default function Card({ variant, children }: Props) {
  const variantStyle = VARIANTS[variant];
  return (
    <div className=" relative">
      <div
        className={`${variantStyle} relative w-300px h-100px rounded-xl flex flex-col gap-6 justify-center`}
      >
        {children}
      </div>
    </div>
  );
}
