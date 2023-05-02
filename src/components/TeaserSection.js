import Button from "./Button";

function TeaserSection({ teaser }) {
  return (
    <section className="teaser-section">
      <div className="teaser-section__info">
        <div>
          <h1 className="teaser-section__title">
            Clean products that deliver better solutions
          </h1>
          <p className="teaser-section__desc">
            A healthier you from the inside out. We've sourced the cleanest
            ingredients to create a line of clean skin care
          </p>
          <Button className="teaser-section__btn btn--btn1">Shop more</Button>
        </div>
      </div>
      <img
        src="assets/img/teaser.png"
        className="teaser-section__img"
        alt="teaser "
      />
    </section>
  );
}

export default TeaserSection;
