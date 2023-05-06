import { useState } from "react";
import Accordion from "../../components/Accordion";
import RatingExcerpt from "./RatingExcerpt";
import Button from "../../components/Button";

function ProductInfoCard() {
  const [cartData, setCartData] = useState({
    quantity: 1,
    price: 18.99,
  });
  return (
    <article className="product-info-card">
      <h1 className="product-info-card__title">All Natural pseutoria cream</h1>
      <RatingExcerpt />
      <span className="product-info-card__price">
        $18.99 <del>$24.99</del>
      </span>
      <p className="product-info-card__desc">
        Cleaner, all natural, skin-care solutions. <br />
        Our custom vitiligio Balm works for all skin types. Clean ingredients
        keep you confident that you're using only the best solutions for your
        skin.
      </p>
      <Accordion
        title={"details"}
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim."
        }
      />
      <Accordion
        title={"Shipping and Handling"}
        body={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim."
        }
      />
      <div className="product-info-card__quantity">
        <button
          onClick={(ev) =>
            setCartData((prev) => ({
              ...prev,
              quantity: prev.quantity + 1,
            }))
          }
          className="product-info-card__btn"
        >
          +
        </button>
        <span className="quant">{cartData.quantity}</span>
        <button
          onClick={(ev) =>
            setCartData((prev) => ({
              ...prev,
              quantity: prev.quantity <= 1 ? 1 : prev.quantity - 1,
            }))
          }
          className="product-info-card__btn"
        >
          -
        </button>
      </div>
      <Button className={"btn--icon product-info-card__btn"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8.48"
          height="8.48"
          viewBox="0 0 8.48 8.48"
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
        Add to bag
      </Button>
    </article>
  );
}

export default ProductInfoCard;
