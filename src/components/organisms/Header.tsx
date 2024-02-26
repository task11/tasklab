import Atom from "@/components/atoms";

import HeaderLogo from "../../../public/assets/svgs/Logo.svg";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <Atom.HeaderLayout variant="primary">
      <HeaderLogo className="cursor-pointer" onClick={() => router.push("/")} />
    </Atom.HeaderLayout>
  );
}
