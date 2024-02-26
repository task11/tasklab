import Organism from "@/components/organisms";

export default function Home() {
  return (
    <div className="relative w-full h-screen py-58px bg-primary_100">
      <Organism.Header />
      <section className="flex flex-col justify-between w-full h-full">
        <section className="w-full">
          <Organism.DayList />
        </section>
        <section className="w-full">
          <Organism.BottomSheet />
        </section>
      </section>
      <Organism.Footer />
    </div>
  );
}
