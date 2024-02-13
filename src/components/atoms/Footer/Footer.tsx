import { VARIANTS } from "./Footer.variant";

interface Props {
  variant: "default";
  children: React.ReactNode;
}

export default function Footer({ variant = "default", children }: Props) {
  const variantStyle = VARIANTS[variant];
  return (
    <div
      className={`${variantStyle} w-full h-58px flex items-center justify-between`}
    >
      {children}
    </div>
  );
}
