import Atom from "@/components/atoms";

interface Props {
  icon: React.ReactNode | string;
  label: string;
  isActive: boolean;
  linkTo?: () => void;
}

export default function NavItem({
  icon,
  label,
  isActive = false,
  linkTo = () => {},
}: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center text-xs "
      onClick={linkTo}
    >
      <Atom.IconWrapper variant={`${isActive ? "accent" : "default"}`}>
        {icon}
      </Atom.IconWrapper>
      <span>{label}</span>
    </div>
  );
}
