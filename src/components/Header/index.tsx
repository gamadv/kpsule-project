import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./styles";
import { useCart } from "../../context/CartContext";
import { IconCounter } from "../IconCounter";

export function Header() {
  const { cart } = useCart();
  const [windowScroll, setWindowScroll] = useState(0);
  

  const hasCart = cart?.length > 0;

  const hasWindowScrolled = windowScroll > 200;

  const watchWindowScroll = useCallback(() => {
    window.addEventListener("scroll", () => {
      setWindowScroll(window.scrollY);
    }),
      [setWindowScroll];
  }, []);

  useEffect(() => {
    watchWindowScroll();
  }, [watchWindowScroll]);

  return (
    <Container hasWindowScrolled={hasWindowScrolled}>
      <div>
        <Image
          src="/images/logo-icon.svg"
          alt="Logo"
          width="114px"
          height="27px"
        ></Image>
        <button>
          {hasCart && <IconCounter number={cart.length}/>}
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
