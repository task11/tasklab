import Organism from "@/components/organisms";

export default function Routine() {
  return (
    <div className="relative w-full h-screen py-58px bg-primary_100 flex flex-col gap-4">
      <Organism.Header />
      <Organism.RoutineCalendar />
      <section className="h-full relative">
        <Organism.RoutineCheckSheet />
      </section>
      <Organism.Footer />
    </div>
  );
}
