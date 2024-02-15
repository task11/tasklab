import Atom from "@/components/atoms";

import FacebookLogo from "../../../public/assets/svgs/FacebookLogo.svg";

export default function FacebookLogin() {
  return (
    <Atom.Button size="md" variant="facebook">
      <div className="flex items-center justify-center gap-3">
        <FacebookLogo />
        페이스북 로그인
      </div>
    </Atom.Button>
  );
}
