import Atom from "@/components/atoms";

import GithubLogo from "../../../public/assets/svgs/GithubLogo.svg";

export default function GithubLogin({ ...rest }) {
  return (
    <Atom.Button name="github" size="md" variant="github" {...rest}>
      <div className="flex items-center justify-center gap-3">
        <GithubLogo />
        깃허브 로그인
      </div>
    </Atom.Button>
  );
}
