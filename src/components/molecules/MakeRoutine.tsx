import Atom from "../atoms";

import PlusButton from "../../../public/assets/svgs/PlusButton.svg";

export default function MakeRoutine() {
  return (
    <Atom.Card variant="skeleton">
      <div className="w-full h-full flex items-center justify-center">
        <PlusButton />
      </div>
    </Atom.Card>
  );
}
