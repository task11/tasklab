import Atom from "@/components/atoms";

export default function LandingButton() {
  return (
    <>
      <Atom.Tooltip label="회원가입부터 로그인까지, 단 30초" />
      <Atom.Button name="start" variant="primary" size="lg">
        시작하기
      </Atom.Button>
    </>
  );
}
