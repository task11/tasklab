import { VARIANTS } from "./IconWrapper.variant";

interface Props {
  variant: "default" | "accent";
  children: React.ReactNode;
}

export default function IconWrapper({ variant = "default", children }: Props) {
  const variantStyle = VARIANTS[variant];
  return <div className={`${variantStyle}`}>{children}</div>;
}
