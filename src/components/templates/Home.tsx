import Organism from "@/components/organisms";

export default function Home() {
  return (
    <div className="relative w-full h-screen py-58px bg-primary_100">
      <Organism.Header />
      <section className="flex flex-col w-full h-full relative">
        <section className="w-full flex items-center justify-center flex-1">
          <Organism.DayList />
        </section>
        <section className="w-full flex flex-4 relative">
          <Organism.BottomSheet />
        </section>
      </section>
      <Organism.Footer />
    </div>
  );
}
