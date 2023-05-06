import { useState } from "react";

function ProductCarousel({ imgSrcList }) {
  const [imgs] = useState([
    "assets/img/vitiligio_Balm.png",
    "assets/img/teaser2.png",
    "assets/img/ezcema.png",
    "assets/img/product-sample.png",
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <section className="product-carousel">
      <div>
        <button
          className="left product-carousel__btn"
          onClick={(ev) => {
            setCurrentIdx((prev) => prev - 1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.484 7.5">
            <g
              id="_001-left-arrow"
              data-name="001-left-arrow"
              transform="translate(0 -132)"
            >
              <g
                id="Group_3022"
                data-name="Group 3022"
                transform="translate(0 132)"
              >
                <path
                  id="Path_2878"
                  data-name="Path 2878"
                  d="M14.878,135.145H2.069l2.122-2.112a.6.6,0,0,0-.853-.857l-3.16,3.145h0a.605.605,0,0,0,0,.856h0l3.16,3.145a.6.6,0,0,0,.853-.857l-2.122-2.112H14.878a.6.6,0,0,0,0-1.21Z"
                  transform="translate(0 -132)"
                  fill="#354e57"
                />
              </g>
            </g>
          </svg>
        </button>
        <button
          className="right product-carousel__btn"
          onClick={(ev) => {
            setCurrentIdx((prev) => prev + 1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.484 7.5">
            <g
              id="_001-left-arrow"
              data-name="001-left-arrow"
              transform="translate(15.483 139.5) rotate(180)"
            >
              <g
                id="Group_3022"
                data-name="Group 3022"
                transform="translate(0 132)"
              >
                <path
                  id="Path_2878"
                  data-name="Path 2878"
                  d="M14.878,135.145H2.069l2.122-2.112a.6.6,0,0,0-.853-.857l-3.16,3.145h0a.605.605,0,0,0,0,.856h0l3.16,3.145a.6.6,0,0,0,.853-.857l-2.122-2.112H14.878a.6.6,0,0,0,0-1.21Z"
                  transform="translate(0 -132)"
                  fill="#354e57"
                />
              </g>
            </g>
          </svg>
        </button>
        <img
          className="product-carousel__current-img"
          src={imgs[currentIdx % imgs.length]}
          alt="d"
        />
        <div className="product-carousel__imgs">
          {imgs.map((imgSrc, idx) => {
            return (
              <img
                src={imgSrc}
                alt={imgSrc}
                key={imgSrc}
                onClick={(ev) => {
                  setCurrentIdx((prev) => idx);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
