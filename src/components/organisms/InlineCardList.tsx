import Molecule from "@/components/molecules";

export default function InlineCardList() {
  return (
    <div className="flex gap-4 items-center justify-center p-5 relative overflow-hidden ">
      <div className=" overflow-x-auto grid grid-flow-col scroll-smooth overscroll-contain scroll-p-1 gap-5 items-center snap-x snap-mandatory scrollbar-hide">
        <Molecule.RoutineConfirmCard />
        <Molecule.RoutineConfirmCard />
        <Molecule.RoutineConfirmCard />
        <Molecule.RoutineConfirmCard />
        <Molecule.RoutineConfirmCard />
      </div>
    </div>
  );
}
