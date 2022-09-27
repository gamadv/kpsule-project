import Image from "next/image";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <Image
          src="/images/logo-icon.svg"
          alt="Logo"
          width="114px"
          height="27px"
        ></Image>
        <button>
          <Image
            src="/images/cart.svg"
            alt="Logo"
            width="34px"
            height="34px"
          ></Image>
        </button>
      </div>
    </Container>
  );
}
