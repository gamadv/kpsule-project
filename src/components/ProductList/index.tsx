import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ProductProps } from "../../pages/api/productList";
import { getAllProducts } from "../../services/data/product-endpoint";
import { ProductItem } from "../ProductItem";
import { Container, Content } from "./styles";

export function ProductList() {
  const [productsList, setProductsList] = useState([] as ProductProps[]);
  const [isLoading, setisLoading] = useState(true);

  const totalProducts = productsList.length ? productsList.length : 0;

  async function getProductsList() {
    const { data: ProductList } = await getAllProducts();
    setProductsList(ProductList);
  }

  useEffect(() => {
    getProductsList();
  }, []);

  console.log(productsList);
  return (
    <Container>
      {isLoading ? <Skeleton baseColor="#E1E1"/> : <p>Best Products</p>}
      <span>
        From a base of
        <strong>{totalProducts} products</strong>
      </span>
      <Content>
        {productsList.length > 0 ? (
          <ProductItem productList={productsList} />
        ) : null}
      </Content>
    </Container>
  );
}
