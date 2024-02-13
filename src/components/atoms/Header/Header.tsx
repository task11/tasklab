import { VARIANTS } from "./Header.variant";

interface Props {
  variant: "default" | "primary";
  children: React.ReactNode;
}

export default function Header({ variant = "primary", children }: Props) {
  const variantStyle = VARIANTS[variant];
  return (
    <div
      className={`${variantStyle} w-full h-58px flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
