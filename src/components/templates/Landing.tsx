import Organism from "@/components/organisms";
import Atom from "@/components/atoms";

export default function Landing() {
  return (
    <div className="flex flex-col w-full h-screen items-center pt-20 justify-around">
      <div>
        <Atom.MainLogo width={340} />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Organism.LandingButton />
      </div>
    </div>
  );
}
