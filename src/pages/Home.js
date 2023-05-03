import Button from "../components/Button.js";
import ProductExcerpt from "../components/ProductExcerpt.js";
import { Link } from "react-router-dom";
import TeaserSection from "../components/TeaserSection.js";
import IngredientExcerpt from "../components/IngredientExcerpt.js";
function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div>
          <div className="info">
            <h1 className="headline">All Natural Skin Remedies</h1>
            <p className="prgh">
              A healthier you from the inside out. We've sourced the dearest
              ingredients to create a line of clean skin care treatments that
              leave you feeling your best.
            </p>
            <Button className="btn--btn1">Shop products</Button>
          </div>
          <div className="img-display">
            <img className="img" src="assets/img/ezcema.png" alt="ezcema" />
          </div>
        </div>
      </section>
      <section className="belt">
        <h1 className="belt__title">solutions for all skin health</h1>
        <p className="belt__prgh">Explore our innovative skincare products</p>
      </section>
      <section className="product-section">
        <div>
          <div className="content">
            <div className="headline">
              <h3>Most popular</h3>
              <h3>
                <Link>Shop all products</Link>
              </h3>
            </div>
            <div className="products">
              {new Array(5).fill({}).map((product) => {
                return <ProductExcerpt product={product} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={"teaser-section"}>
        <div className="teaser-section__info">
          <div>
            <h1 className="teaser-section__title">
              {"Clean products that deliver better solutions"}
            </h1>
            <p className="teaser-section__desc">
              {
                "A healthier you from the inside out. We've sourced the cleanest ingredients to create a line of clean skin care"
              }
            </p>
            <Button className="teaser-section__btn btn--btn1">Shop more</Button>
          </div>
        </div>
        <img
          src={"assets/img/teaser.png"}
          className="teaser-section__img"
          alt="teaser "
        />
      </section>
      <section className="product-section">
        <div className="content">
          <div className="headline">
            <h3>Top Rated</h3>
            <h3>
              <Link>Shop all products</Link>
            </h3>
          </div>
          <div className="products">
            {new Array(10).fill({}).map((product) => {
              return <ProductExcerpt product={product} />;
            })}
          </div>
        </div>
      </section>
      <section className="belt ingredient">
        <h1 className="belt__title">We use the best</h1>
        <p className="belt__prgh">Explore our innovative skincare products</p>
      </section>
      <section className="ingredient-section">
        <div>
          {new Array(10).fill({}).map(() => {
            return <IngredientExcerpt />;
          })}
        </div>
      </section>
      <section className="three-element-section">
        <div>
          <article className="three-element-card">
            <svg
              className="three-element-card__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="27.367"
              height="27.367"
              viewBox="0 0 27.367 27.367"
            >
              <g
                id="_001-shop"
                data-name="001-shop"
                transform="translate(0.25 0.25)"
              >
                <g
                  id="Group_3221"
                  data-name="Group 3221"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3066"
                    data-name="Path 3066"
                    d="M26.818,6.414,24.9.656A.959.959,0,0,0,23.988,0H2.879a.959.959,0,0,0-.911.656L.049,6.414A.978.978,0,0,0,0,6.691v.985a4.778,4.778,0,0,0,1.919,3.817v12.5A2.879,2.879,0,0,0,4.8,26.867H22.069a2.879,2.879,0,0,0,2.879-2.879v-12.5a4.777,4.777,0,0,0,1.919-3.817V6.691A.975.975,0,0,0,26.818,6.414ZM20.15,1.919H23.3l1.28,3.838H20.15Zm-5.757,0h3.838V5.757H14.393Zm-5.757,0h3.838V5.757H8.636Zm-5.065,0H6.717V5.757H2.29ZM15.353,24.948H11.514V17.272h3.838v7.676Zm7.676-.959a.96.96,0,0,1-.96.96h-4.8V16.312a.96.96,0,0,0-.96-.96H10.555a.96.96,0,0,0-.96.96v8.636H4.8a.96.96,0,0,1-.96-.96V12.378A4.743,4.743,0,0,0,7.676,11.5a4.863,4.863,0,0,0,5.757,0,4.863,4.863,0,0,0,5.757,0,4.743,4.743,0,0,0,3.838.881v11.61Zm-.96-13.434a2.836,2.836,0,0,1-2.156-1,.96.96,0,0,0-1.445,0,2.895,2.895,0,0,1-4.312,0,.992.992,0,0,0-1.4-.043l-.043.043a2.895,2.895,0,0,1-4.312,0A.992.992,0,0,0,7,9.516l-.043.043a2.835,2.835,0,0,1-2.156,1A2.879,2.879,0,0,1,1.919,7.676H24.948A2.879,2.879,0,0,1,22.069,10.555Z"
                    transform="translate(0 0)"
                    fill="#c6b9b6"
                    stroke="#c6b9b6"
                    strokeWidth="0.5"
                  />
                </g>
              </g>
            </svg>
            <h1 className="three-element-card__title">
              We’re offering new ways to shop.
            </h1>
            <Link className="three-element-card__link"> Store locator</Link>
          </article>
          <article className="three-element-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.974"
              height="30.222"
              viewBox="0 0 32.974 30.222"
            >
              <path
                id="_001-shopping-cart"
                data-name="001-shopping-cart"
                d="M31.619,26.841H5.838l-.383-4.269a1.354,1.354,0,0,0-1.349-1.233H1.354a1.354,1.354,0,0,0,0,2.708H2.868c.827,9.214-1.31-14.6,1.558,17.352a5.21,5.21,0,0,0,1.95,3.53,4.1,4.1,0,1,0,7.093,1.129H20.88a4.106,4.106,0,1,0,3.86-2.708H9.617a2.515,2.515,0,0,1-2.312-1.525l21.642-1.272a1.354,1.354,0,0,0,1.234-1.023l2.752-11.006a1.355,1.355,0,0,0-1.314-1.683ZM9.608,48.852a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,9.608,48.852Zm15.133,0a1.4,1.4,0,1,1,1.4-1.4A1.4,1.4,0,0,1,24.741,48.852ZM27.8,37.907,6.941,39.132l-.86-9.584h23.8Z"
                transform="translate(0 -21.338)"
                fill="#c6b9b6"
              />
            </svg>

            <h1 className="three-element-card__title">
              Buy online, pickup in store
            </h1>
            <Link className="three-element-card__link"> Learn more</Link>
          </article>
          <article className="three-element-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.907"
              height="33.966"
              viewBox="0 0 33.907 33.966"
            >
              <path
                id="Icon_feather-phone-call"
                data-name="Icon feather-phone-call"
                d="M22.213,7.388A7.36,7.36,0,0,1,28.028,13.2M22.213,1.5a13.248,13.248,0,0,1,11.7,11.688M32.444,24.935v4.416A2.944,2.944,0,0,1,29.235,32.3a29.132,29.132,0,0,1-12.7-4.519A28.7,28.7,0,0,1,7.7,18.944,29.132,29.132,0,0,1,3.18,6.181,2.944,2.944,0,0,1,6.109,2.972h4.416A2.944,2.944,0,0,1,13.469,5.5,18.9,18.9,0,0,0,14.5,9.64a2.944,2.944,0,0,1-.662,3.106l-1.87,1.87A23.553,23.553,0,0,0,20.8,23.448l1.869-1.87a2.944,2.944,0,0,1,3.106-.662,18.9,18.9,0,0,0,4.136,1.03A2.944,2.944,0,0,1,32.444,24.935Z"
                transform="translate(-1.667 0.156)"
                fill="none"
                stroke="#c6b9b6"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
            </svg>
            <h1 className="three-element-card__title">Curbside pickup</h1>
            <Link className="three-element-card__link"> Learn more</Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
