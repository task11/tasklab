import { VARIANTS } from "./HeaderLayout.variant";

interface Props {
  variant: "default" | "primary";
  children: React.ReactNode;
}

export default function HeaderLayout({ variant = "primary", children }: Props) {
  const variantStyle = VARIANTS[variant];
  return (
    <div
      className={`${variantStyle} absolute top-0 w-full h-58px flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
