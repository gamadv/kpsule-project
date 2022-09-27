import { useEffect, useState } from "react";
import { ProductProps } from "../../pages/api/productList";
import { getAllProducts } from "../../services/data/product-endpoint";
import { ProductItem } from "../ProductItem";
import SkeletonContent from "./SkeletonContent";
import { Container, Content } from "./styles";

export function ProductList() {
  const [productsList, setProductsList] = useState([] as ProductProps[]);
  const [isLoading, setIsLoading] = useState(true);

  const totalProducts = productsList.length ? productsList.length : 0;

  function changeLoadingTime() {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  async function getProductsList() {
    const { data: ProductList } = await getAllProducts();
    setProductsList(ProductList);
  }

  useEffect(() => {
    getProductsList();
    changeLoadingTime();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <SkeletonContent />
      ) : (
        <>
          <p>Best Products</p>
          <span>
            From a base of
            <strong>{totalProducts} products</strong>
          </span>
        </>
      )}
      <Content>
        {productsList.length > 0 ? (
          <ProductItem productList={productsList} isLoading={isLoading} />
        ) : null}
      </Content>
    </Container>
  );
}
