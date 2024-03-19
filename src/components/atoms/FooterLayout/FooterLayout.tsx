import { VARIANTS } from "./FooterLayout.variant";

interface Props {
  variant: "default";
  children: React.ReactNode;
}

export default function FooterLayout({ variant = "default", children }: Props) {
  const variantStyle = VARIANTS[variant];
  return (
    <div
      className={`${variantStyle} border-solid border-t-1px border-g300 absolute bottom-0 w-full h-58px px-12 flex items-center justify-between`}
    >
      {children}
    </div>
  );
}
