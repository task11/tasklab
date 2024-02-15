import Molecule from "@/components/molecules";

export default function SocialLogin() {
  return (
    <>
      <Molecule.KakaoLogin />
      <Molecule.GoogleLogin />
      <Molecule.FacebookLogin />
      <Molecule.GithubLogin />
    </>
  );
}
