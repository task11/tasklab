import Image from "next/image";
import Logo from "../../../../public/assets/MainLogo.png";

interface Props {
  width: number;
}

export default function MainLogo({ width }: Props) {
  return <Image src={Logo} width={width} alt="Main Logo" />;
}
