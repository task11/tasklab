import Molecule from "@/components/molecules";
import Organism from "@/components/organisms";

export default function RoutineCheckSheet() {
  return (
    <Molecule.FilteredSheet
      variant="md"
      leftLabel="데일리"
      rightLabel="투데이"
      left={<Organism.InlineCardList />}
      right={<Organism.InlineCardList />}
      isLeftActive={true}
    />
  );
}
