import { SIZES } from "./Badge.size";
import { VARIANTS } from "./Badge.variant";

interface Props {
  size: "md";
  variant: "default" | "primary";
  label: string;
}

export default function Badge({
  size = "md",
  variant = "default",
  label,
}: Props) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  return (
    <div
      className={`${sizeStyle} ${variantStyle} flex justify-center items-center`}
    >
      {label}
    </div>
  );
}
