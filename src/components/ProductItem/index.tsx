import Image from "next/image";
import SkeletonContent from "./SkeletonContent";
import { ProgressBar, IconCounter } from "..";
import { useCart } from "../../context/CartContext";
import { ProductProps } from "../../pages/api/productList";
import { convertToEUR } from "../../utils";

import { Container } from "./styles";
interface IProductItem {
  productList: ProductProps[];
  isLoading?: boolean;
}

export function ProductItem({ productList, isLoading }: IProductItem) {
  const { addToCart } = useCart();

  function getBiggestValue(arrayToExtractValue: Array<{ score: number }>) {
    if (arrayToExtractValue.length === 1) {
      return arrayToExtractValue[0].score;
    }

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
                    <div className="detailsContent">
                      <section>
                        <strong>
                          {" "}
                          Health Goals{" "}
                          {healthGoals.length > 0 && (
                            <IconCounter number={healthGoals.length} />
                          )}
                        </strong>
                        <span>Améliorer les performances</span>
                      </section>
                      <ProgressBar
                        progressValue={getBiggestValue(healthGoals)}
                        progressWidth={64}
                        bgColor="#f5f7fe"
                        progressTrack={58}
                        trackColor="#BDBDBD"
                      >
                        <Image
                          src="/images/medal.svg"
                          alt="Medal"
                          width="24px"
                          height="24px"
                        />
                      </ProgressBar>
                    </div>
                    <div className="detailsContent">
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
                      <ProgressBar
                        progressValue={getBiggestValue(symptoms)}
                        progressWidth={64}
                        bgColor="#f5f7fe"
                        progressTrack={58}
                        trackColor="#BDBDBD"
                      >
                        <Image
                          src="/images/brain.svg"
                          alt="Medal"
                          width="24px"
                          height="24px"
                        />
                      </ProgressBar>
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
