import Button from "./Button.js";

function ProductExcerpt({ className }) {
  return (
    <article className={className + "    product-excerpt"}>
      {/* one of the images will actually get displayed at a time */}
      <img
        className="product-img product-excerpt__img"
        src="assets/img/vitiligio.png"
        alt="vitiligio"
      />
      <img
        className="sample-img product-excerpt__img"
        src="assets/img/product-sample.png"
        alt="product sample"
      />
      <div className="product-excerpt__meta">
        <h1 className="product-excerpt__name">Vitiligio Solution</h1>
        <p className="product-excerpt__desc">All Natural Ingredients.</p>
        <span className="product-excerpt__price">$24.99</span>
        <Button className={"product-excerpt__btn btn--icon"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.48"
            height="8.48"
            viewBox="0 0 8.48 8.48"
            className="icon"
          >
            <g
              id="Group_3197"
              data-name="Group 3197"
              transform="translate(-0.188 -3.188)"
            >
              <g
                id="Group_3196"
                data-name="Group 3196"
                transform="translate(0.188 3.188)"
              >
                <path
                  id="Path_2899"
                  data-name="Path 2899"
                  d="M86.391,341.333a.848.848,0,1,0,.848.848A.844.844,0,0,0,86.391,341.333Z"
                  transform="translate(-83.847 -334.549)"
                  fill="#2e2e22"
                />
                <path
                  id="Path_2900"
                  data-name="Path 2900"
                  d="M3.011,4.664H6.17a.851.851,0,0,0,.742-.437L8.427,1.476a.41.41,0,0,0,.053-.2A.424.424,0,0,0,8.056.848H1.787L1.384,0H0V.848H.848L2.372,4.064,1.8,5.1a.862.862,0,0,0-.1.409.848.848,0,0,0,.848.848H7.632V5.512H2.724a.1.1,0,0,1-.106-.106.1.1,0,0,1,.013-.051Z"
                  fill="#2e2e22"
                />
                <path
                  id="Path_2901"
                  data-name="Path 2901"
                  d="M299.724,341.333a.848.848,0,1,0,.848.848A.844.844,0,0,0,299.724,341.333Z"
                  transform="translate(-292.939 -334.549)"
                  fill="#2e2e22"
                />
              </g>
            </g>
          </svg>
          <p>Add to cart</p>
        </Button>
      </div>
    </article>
  );
}

export default ProductExcerpt;
