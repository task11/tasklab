import PlusButton from "../../../public/assets/svgs/PlusButton.svg";

interface Props {
  onClick: () => void;
}

export default function MakeRoutine({ onClick }: Props) {
  return <PlusButton onClick={onClick} />;
}
