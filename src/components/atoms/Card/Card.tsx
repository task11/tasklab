import { VARIANTS } from "./Card.variant";

interface Props {
  variant: "default" | "disabled";
  children: React.ReactNode;
}

export default function Card({ variant, children }: Props) {
  const variantStyle = VARIANTS[variant];
  return (
    <div className=" relative">
      <div className={`${variantStyle} w-300px h-100px rounded-xl p-4`}>
        {children}
      </div>
    </div>
  );
}
