import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import LinkGroup from "../components/LinkGroup";
import ProductExcerpt from "../components/ProductExcerpt";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../components/Button";
function Acne() {
  return (
    <main className="_category">
      <section className="banner-section">
        <div>
          <div className="info">
            <h1 className="headline">All Natural Skin Remedies</h1>
            <p className="prgh">
              A healthier you from the inside out. We've sourced the dearest
              ingredients to create a line of clean skin care treatments that
              leave you feeling your best.
            </p>
          </div>
          <div className="product-img">
            <img className="img" src="assets/img/ezcema.png" alt="ezcema" />
          </div>
        </div>
      </section>
      <section className="category-section">
        <div>
          <Dropdown className="dropdown" />
          <aside className="links">
            <LinkGroup name={"acne"} to={"/acne"}>
              <Link>ointment</Link>
              <Link>Spot Treatment</Link>
              <Link>Lotion</Link>
              <Link>Cream</Link>
            </LinkGroup>
            <LinkGroup name={"sun"} to={"/sun"}>
              <Link>Relief</Link>
              <Link>Cream</Link>
              <Link>Protection</Link>
            </LinkGroup>
            <LinkGroup name={"ezcema"} to={"/ezcema"}>
              <Link>cream</Link>
              <Link>Oil</Link>
              <Link>Lotion</Link>
              <Link>Balm</Link>
            </LinkGroup>
            <LinkGroup name={"psoriasis"} to={"/psoriasis"}>
              <Link>Balm</Link>
              <Link>Ointment</Link>
            </LinkGroup>
          </aside>
          <div className="products">
            {new Array(10).fill({}).map((product) => {
              return (
                <ProductExcerpt
                  key={nanoid()}
                  className="product-excerpt--wide"
                />
              );
            })}
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
          src={"assets/img/acneguy.png"}
          className="teaser-section__img"
          alt="teaser "
        />
      </section>
      <section className="product-section">
        <div className="product-section__content">
          <div className="product-section__headline">
            <h3>Top Rated</h3>
            <h3>
              <Link>Shop all products</Link>
            </h3>
          </div>
          <div className="product-section__products">
            {new Array(10).fill({}).map((product) => {
              return (
                <ProductExcerpt
                  className="product-excerpt--wide"
                  product={product}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Acne;
