import { VARIANTS } from "./BottomSheetLayout.variant";

interface Props {
  children: React.ReactNode;
  variant: "md" | "lg";
}

export default function BottomSheetLayout({ children, variant }: Props) {
  const variantStyle = VARIANTS[variant];
  return (
    <div
      className={`bg-white w-screen ${variantStyle} rounded-t-3xl overflow-scroll absolute bottom-0`}
    >
      {children}
    </div>
  );
}
