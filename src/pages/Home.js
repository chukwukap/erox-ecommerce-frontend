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
      <section className="bar">
        <h1 className="title">solutions for all skin health</h1>
        <p className="subtitle">Explore our innovative skincare products</p>
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
      <TeaserSection teaser={{}} />
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
      <section className="bar b">
        <h1 className="title">We use the best</h1>
        <p className="subtitle">Explore our innovative skincare products</p>
      </section>
      <section className="ingredient-section">
        <div>
          {new Array(10).fill({}).map(() => {
            return <IngredientExcerpt />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
