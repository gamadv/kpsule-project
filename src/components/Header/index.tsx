import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { IconCounter, ProgressBar } from "../index";

import { Container } from "./styles";

const cartValues = {
  "1": 25,
  "2": 50,
  "3": 75,
  "4": 100,
};

export function Header() {
  const { cart } = useCart();
  const [windowScroll, setWindowScroll] = useState(0);

  const hasCart = cart?.length > 0;

  const hasWindowScrolled = windowScroll > 200;

  const parsedProgressValue = cart?.length > 4 ? 100 : cartValues[cart?.length]

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
      <div id="headerContent">
        <Image
          src="/images/logo-icon.svg"
          alt="Logo"
          width="114px"
          height="27px"
        />
        <div id="cartContainer">
          {hasCart && <IconCounter number={cart.length} />}
          <ProgressBar
            progressValue={parsedProgressValue}
            progressWidth={42}
            bgColor="#ffff"
            progressTrack={34}
            trackColor="transparent"
          >
            <Image
              src="/images/cart.svg"
              alt="Logo"
              width="34px"
              height="34px"
            />
          </ProgressBar>
        </div>
      </div>
    </Container>
  );
}
