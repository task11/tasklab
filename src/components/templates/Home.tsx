import Atoms from "@/components/atoms";
import Organism from "@/components/organisms";

export default function Home() {
  return (
    <div className=" relative w-full h-screen pt-14 bg-primary_100">
      <Organism.Header />
      <Organism.Footer />
    </div>
  );
}
