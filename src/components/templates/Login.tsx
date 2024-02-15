import Atoms from "@/components/atoms";
import Organism from "@/components/organisms";

export default function Login() {
  return (
    <div className="flex flex-col w-full h-screen items-center pt-20 justify-around">
      <div>
        <Atoms.MainLogo width={300} />
      </div>
      <div className="flex flex-col gap-2 w-full items-center">
        <Organism.SocialLogin />
      </div>
    </div>
  );
}
