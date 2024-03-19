import { SIZES } from "./HorizontalLine.size";
import { VARIANTS } from "./HorizontalLine.variant";

interface Props {
  size: "md" | "lg" | "full" | "half";
  variant: "default" | "accent" | "disabled";
}

export default function HorizontalLine({
  size = "md",
  variant = "default",
}: Props) {
  const sizeStyle = SIZES[size];
  const virantStyle = VARIANTS[variant];

  return <div className={`${sizeStyle} ${virantStyle} h-1px`} />;
}
