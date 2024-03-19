import Atom from "@/components/atoms";

import GoogleLogo from "../../../public/assets/svgs/GoogleLogo.svg";

export default function GoogleLogin({ ...rest }) {
  return (
    <Atom.Button name="google" size="md" variant="google" {...rest}>
      <div className="flex items-center justify-center gap-3">
        <GoogleLogo />
        구글 로그인
      </div>
    </Atom.Button>
  );
}
