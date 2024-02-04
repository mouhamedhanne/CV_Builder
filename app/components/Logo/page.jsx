import Logo from "@/public/assets/Images/cv-builder1.png";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div>
        <Image src={Logo} alt="logo" />
      </div>
    </>
  );
}
