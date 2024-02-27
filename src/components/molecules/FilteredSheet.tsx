import Atom from "@/components/atoms";
import Molecule from "@/components/molecules";
import { useState } from "react";

interface Props {
  leftLabel: string;
  rightLabel: string;
  left: React.ReactNode;
  right: React.ReactNode;
  isLeftActive: boolean;
}

export default function FilteredSheet({
  leftLabel,
  rightLabel,
  left,
  right,
}: Props) {
  const [isLeftSheetActive, setIsLeftSheetActive] = useState(true);
  const handleSheetActive = (isActive: boolean) => {
    setIsLeftSheetActive(isActive);
  };
  return (
    <Atom.BottomSheetLayout>
      <div className="flex w-full sticky z-50 bg-white top-0">
        <Molecule.UnderlineLetter
          label={leftLabel}
          isActive={isLeftSheetActive}
          onActive={() => handleSheetActive(true)}
        />
        <Molecule.UnderlineLetter
          label={rightLabel}
          isActive={!isLeftSheetActive}
          onActive={() => handleSheetActive(false)}
        />
      </div>
      {isLeftSheetActive ? <>{left}</> : <>{right}</>}
    </Atom.BottomSheetLayout>
  );
}
