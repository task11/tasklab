import Atom from "@/components/atoms";
import Molecule from "@/components/molecules";

import Calendar from "../../../public/assets/svgs/Calendar.svg";
import Home from "../../../public/assets/svgs/Home.svg";
import Profile from "../../../public/assets/svgs/Profile.svg";

import { usePathname, useRouter } from "next/navigation";

const PATH = {
  HOME: "/",
  ROUTINE: "/routine",
  PROFILE: "/profile",
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Atom.FooterLayout variant="default">
      <Molecule.NavItem
        isActive={pathname === PATH.ROUTINE}
        icon={<Calendar />}
        label="루틴"
        linkTo={() => router.push(PATH.ROUTINE)}
      />
      <Molecule.NavItem
        isActive={pathname === PATH.HOME}
        icon={<Home />}
        label="홈"
        linkTo={() => router.push(PATH.HOME)}
      />
      <Molecule.NavItem
        isActive={pathname === PATH.PROFILE}
        icon={<Profile />}
        label="내 정보"
        linkTo={() => router.push(PATH.PROFILE)}
      />
    </Atom.FooterLayout>
  );
}
