import Image from "next/image";
import { ProductProps } from "../../pages/api/productList";
import { convertToEUR } from "../../utils";
import { Container } from "./styles";

interface IProductItem {
  productList: ProductProps[];
}

export function ProductItem({ productList }: IProductItem) {
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
                    <strong> Health Goals </strong>
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
                    <strong> Symptoms </strong>
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
              <button>
                <p>{convertToEUR(price)}</p>
                <Image
                  src="/images/button-plus.png"
                  alt="Product"
                  width="19px"
                  height="19px"
                />
              </button>
            </li>
          )
        )}
      </ul>
    </Container>
  );
}
