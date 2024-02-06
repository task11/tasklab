import { SIZES } from "./Button.size";
import { VARIANTS } from "./Button.variant";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?:
    | "default"
    | "primary"
    | "accent"
    | "kakao"
    | "google"
    | "facebook"
    | "github";
  label: string;
  name?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  size = "md",
  variant = "default",
  label,
  name = "",
  ...rest
}: Props) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <button
      type="button"
      name={name}
      className={`${sizeStyle} ${variantStyle} rounded-lg disabled:opacity-50`}
      {...rest}
    >
      {label}
    </button>
  );
}
