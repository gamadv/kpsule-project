import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { ProductProps } from "../../pages/api/productList";
import { convertToEUR } from "../../utils";
import { IconCounter } from "../IconCounter";
import SkeletonContent from "./SkeletonContent";
import { Container } from "./styles";

interface IProductItem {
  productList: ProductProps[];
  isLoading?: boolean;
}

export function ProductItem({ productList, isLoading }: IProductItem) {
  const { addToCart } = useCart();

  function getBiggestValue(arrayToExtractValue: Array<{ score: number }>) {
    const getValues = arrayToExtractValue.map((object) => {
      return object.score;
    });

    const maxValue = Math.max(...getValues);

    return maxValue;
  }

  function handleAddToCart(productId: number) {
    addToCart(productId);
  }

  return (
    <Container>
      <ul>
        {productList.map(
          ({
            id,
            brand,
            capsuleAmount,
            hasPrecaution,
            isInPack,
            name,
            price,
            score,
            hasSynergy,
            healthGoals,
            symptoms,
          }) => (
            <li key={id}>
              {isLoading ? (
                <SkeletonContent />
              ) : (
                <>
                  <header>
                    {isInPack && (
                      <Image
                        src="/images/isinpack.svg"
                        alt="Capsule Amount"
                        width="24px"
                        height="24px"
                      />
                    )}
                    {hasPrecaution && (
                      <Image
                        src="/images/precaution.svg"
                        alt="Capsule Amount"
                        width="24px"
                        height="24px"
                      />
                    )}
                    {capsuleAmount > 0 && (
                      <span>
                        <Image
                          src="/images/capsule-amount.svg"
                          alt="Capsule Amount"
                          width="16px"
                          height="16px"
                        />
                        {capsuleAmount}
                      </span>
                    )}
                  </header>
                  <div id="titleContainer">
                    <div>
                      <strong>
                        {brand} {name}
                      </strong>
                      <p>
                        Votré compatibilté
                        <strong>{score} / 100</strong>
                      </p>
                    </div>
                    <Image
                      src="/images/product-example.svg"
                      alt="Product"
                      width="94px"
                      height="76px"
                    />
                  </div>
                  <div id="detailsContainer">
                    <div>
                      <section>
                        <strong>
                          {" "}
                          Health Goals{" "}
                          {healthGoals.length > 0 && (
                            <IconCounter number={symptoms.length} />
                          )}
                        </strong>
                        <span>Améliorer les performances</span>
                      </section>
                      <span>
                        <Image
                          src="/images/medal.svg"
                          alt="Medal"
                          width="24px"
                          height="24px"
                        />
                      </span>
                    </div>
                    <div>
                      <section>
                        <strong>
                          {" "}
                          Symptoms{" "}
                          {symptoms.length > 0 && (
                            <IconCounter number={symptoms.length} />
                          )}
                        </strong>
                        <span>Mémorie</span>
                      </section>
                      <span>
                        <Image
                          src="/images/brain.svg"
                          alt="Medal"
                          width="24px"
                          height="24px"
                        />
                      </span>
                    </div>
                  </div>
                  <button onClick={() => handleAddToCart(id)}>
                    <p>{convertToEUR(price)}</p>
                    <Image
                      src="/images/button-plus.png"
                      alt="Product"
                      width="19px"
                      height="19px"
                    />
                  </button>
                </>
              )}
            </li>
          )
        )}
      </ul>
    </Container>
  );
}
