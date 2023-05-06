import { nanoid } from "@reduxjs/toolkit";
import Button from "../components/Button";
import NewsTeaser from "../components/NewsTeaser";
import useTitle from "../hooks/useTitle.js";

function About() {
  useTitle("About Erox");
  return (
    <main className="about-page">
      <section className="about-page__section1">
        <div>
          <h1 className="headline">Our mission is a healthier you</h1>
          <p className="prgh">
            A healthier you from the inside out. We've sourced the cleanest
            ingredients to create a line of clean skin care treatments that
            leave you feeling the best
          </p>
        </div>
      </section>
      <section className="belt">
        <div>
          <h1 className="belt__title">The cleanest ingredient on earth</h1>
          <p className="belt__prgh">
            Our mission back then was simple, and it remains the same today.
            When in doubt, turn to food first. Nothing works better. When you
            can’t, take our supplements.
          </p>
        </div>
      </section>
      <section className={"teaser-section teaser-section__one"}>
        <div className="teaser-section__info">
          <div>
            <h1 className="teaser-section__title">All Natural Ingredients.</h1>
            <p className="teaser-section__desc">
              A healthier you from inside out. We've sourced the cleanest
              ingredients to create a line of clean skin care
            </p>
            <Button className="teaser-section__btn btn--btn1">Shop more</Button>
          </div>
        </div>
        <img
          src="assets/img/teaser2.png"
          className="teaser-section__img"
          alt="teaser "
        />
      </section>
      <section className={"teaser-section teaser-section__two"}>
        <div className="teaser-section__info">
          <div>
            <h1 className="teaser-section__title">
              clean products that deliver better solutions
            </h1>
            <p className="teaser-section__desc">
              A healthier you from the inside out. We've sourced the cleanest
              ingredients to create a line of clean skin care
            </p>
            <Button className="teaser-section__btn btn--btn1">Shop more</Button>
          </div>
        </div>
        <img
          src="assets/img/teaser3.png"
          className="teaser-section__img"
          alt="teaser "
        />
      </section>
      <section className="img-grid-section">
        <div>
          <div className="img-grid-section__social">
            <img
              src="assets/img/ig.png"
              className="icon"
              alt="instagram icon"
            />
            <span>@Eroxnatural</span>
          </div>
          <div className="img-grid-section__grid-box">
            {new Array(10).fill({}).map((img) => {
              return (
                <img
                  key={nanoid()}
                  src="assets/img/teaser.png"
                  alt="i"
                  className="img-grid-section__img"
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="news-section">
        <div>
          <div className="news-section__belt">
            <h1 className="headline">Recent news</h1>
            <p className="prgh">Explore our innovative skincare products</p>
          </div>
          <div className="news-section__grid-box">
            {new Array(5).fill({}).map((img) => {
              return <NewsTeaser key={nanoid()} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
