import Atom from "@/components/atoms";

import FacebookLogo from "../../../public/assets/svgs/FacebookLogo.svg";

export default function FacebookLogin({ ...rest }) {
  return (
    <Atom.Button name="facebook" size="md" variant="facebook" {...rest}>
      <div className="flex items-center justify-center gap-3">
        <FacebookLogo />
        페이스북 로그인
      </div>
    </Atom.Button>
  );
}
