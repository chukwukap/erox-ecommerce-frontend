import ProductCarousel from "../../components/ProductCarousel";
import ProductInfoCard from "./ProductInfoCard";
import ProductExcerpt from "../../components/ProductExcerpt.js";
import IngredientExcerpt from "../../components/IngredientExcerpt";
import Button from "../../components/Button";
import { nanoid } from "@reduxjs/toolkit";
function ProductPage({ product }) {
  return (
    <main className="single-product-page">
      <section className="single-product-section">
        <div>
          <ProductCarousel />
          <ProductInfoCard />
        </div>
      </section>
      <section className="related-products-section">
        <div>
          <h1 className="related-products-section__headline">
            Related Products
          </h1>
          <div className="related-products-section__products">
            {new Array(5).fill({}).map((product) => {
              return <ProductExcerpt key={nanoid()} />;
            })}
          </div>
        </div>
      </section>
      <section className="ingredient-section">
        <div>
          <div className="ingredient-section__header">
            <h1 className="title">What's in it</h1>{" "}
            <h2 className="subtitle">
              Explore our innovative skincare products{" "}
            </h2>
          </div>
          <div className="ingredient-section__ingredients">
            {new Array(3).fill({}).map(() => {
              return <IngredientExcerpt key={nanoid()} />;
            })}
          </div>
        </div>
      </section>
      <section className={"teaser-section teaser-section--inverted"}>
        <div className="teaser-section__info">
          <div>
            <h1 className="teaser-section__title">
              {"All Natural Ingredients."}
            </h1>
            <p className="teaser-section__desc">
              {
                "A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"
              }
            </p>
            <Button className="teaser-section__btn btn--btn1">Shop more</Button>
          </div>
        </div>
        <img
          src={"assets/img/lady.png"}
          className="teaser-section__img"
          alt="teaser "
        />
      </section>
    </main>
  );
}

export default ProductPage;
