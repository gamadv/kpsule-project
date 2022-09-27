import Image from "next/image";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Modal, useModal } from "../../components/Modal";
import { ProductProps } from "../../pages/api/productList";
import { getAllProducts } from "../../services/data/product-endpoint";

import { ModalContent } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

interface ICartContext {
  children?: ReactNode;
  cart: ProductProps[];
  setCart: Dispatch<SetStateAction<ProductProps[]>>;
  addToCart: (number) => void;
}

const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }) {
  const { isShowModal, toggleModal } = useModal();
  const [cart, setCart] = useState<ProductProps[]>();
  const [productExists, setProductExists] = useState<ProductProps>();

  const addToCart = async (productId: number) => {
    const { data } = await getAllProducts();

    const productAlreadyExists = cart?.find(
      (product) => product.id === productId
    );

    setProductExists(productAlreadyExists);

    if (productAlreadyExists) {
      toggleModal();
      return;
    }

    const findProduct = data.find((product) => product.id === productId);

    if (cart) {
      setCart([...cart, findProduct]);
      localStorage.setItem(
        "@Kpsule:cart",
        JSON.stringify([...cart, findProduct])
      );
    } else {
      setCart([findProduct]);
      localStorage.setItem("@Kpsule:cart", JSON.stringify([findProduct]));
    }
  };

  const removeFromCart = (productId: number) => {
    const removed = cart.filter((product) => product.id !== productId);
    setCart(removed);
    localStorage.setItem("@Kpsule:cart", JSON.stringify(removed));
    toggleModal();
  };

  const values = { cart, setCart, addToCart };

  useEffect(() => {
    const storagedCart = localStorage.getItem("@Kpsule:cart");

    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={values}>
      {children}
      <Modal isShowModal={isShowModal} onCloseModal={toggleModal}>
        <ModalContent>
          <Image
            src="/images/modal-cart.svg"
            alt="Medal"
            width="130px"
            height="98px"
          />
          <p>
            You&rsquo;ve already added {productExists?.name} to your basket. Do
            you want to remove it ?
          </p>
          <div id="buttonsContainer">
            <button onClick={() => removeFromCart(productExists?.id)}>
              Yes
            </button>
            <button onClick={toggleModal}>No keep it</button>
          </div>
        </ModalContent>
      </Modal>
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
