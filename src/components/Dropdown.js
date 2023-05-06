import { useState } from "react";

function Dropdown({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const deflt = "recommended";
  const [value, setValue] = useState(deflt);

  function handleClick({ target: { value } }) {
    setValue((prev) => value || deflt);
  }
  function toggleIsOpen(ev) {
    setIsOpen((prev) => !prev);
  }
  return (
    <div
      className={
        isOpen ? "dropdown open " + className : "dropdown " + className
      }
      onClick={toggleIsOpen}
    >
      <button className="dropdown__preview">
        <span className="title">Sort by:</span>{" "}
        <span className="current">{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10.991 6.284"
          className="caret"
        >
          <path
            id="Icon_ionic-ios-arrow-down"
            data-name="Icon ionic-ios-arrow-down"
            d="M11.685,15.636l4.156-4.159a.782.782,0,0,1,1.109,0,.792.792,0,0,1,0,1.113L12.241,17.3a.784.784,0,0,1-1.083.023L6.417,12.593A.786.786,0,1,1,7.526,11.48Z"
            transform="translate(-6.188 -11.246)"
            fill="#547665"
          />
        </svg>
      </button>
      <OptionBtn
        className="dropdown__option"
        value={"new"}
        onClick={handleClick}
        currentValue={value}
      >
        New
      </OptionBtn>
      <OptionBtn
        className="dropdown__option"
        value={"recommended"}
        onClick={handleClick}
        currentValue={value}
      >
        Recommended{" "}
      </OptionBtn>
      <OptionBtn
        className="dropdown__option"
        value={"title ascending"}
        onClick={handleClick}
        currentValue={value}
      >
        Title Ascending
      </OptionBtn>
      <OptionBtn
        className="dropdown__option"
        value={"title descending"}
        onClick={handleClick}
        currentValue={value}
      >
        Title Descending
      </OptionBtn>
      <OptionBtn
        className="dropdown__option"
        value={"price ascending"}
        onClick={handleClick}
        currentValue={value}
      >
        Price Ascending
      </OptionBtn>
      <OptionBtn
        className="dropdown__option"
        value={"price descending"}
        onClick={handleClick}
        currentValue={value}
      >
        Price Descending
      </OptionBtn>
    </div>
  );
}

function OptionBtn(props) {
  const { className, value, currentValue, children, onClick } = props;
  const isSelected = value === currentValue && !props.hasOwnProperty("uncheck");
  return (
    <button
      onClick={onClick}
      className={isSelected ? className + "     active" : className}
      value={value}
    >
      {children}{" "}
      {isSelected ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9.587"
          height="7.49"
          viewBox="0 0 9.587 7.49"
        >
          <path
            id="Icon_metro-checkmark"
            data-name="Icon metro-checkmark"
            d="M10.66,5.784,6.166,10.278l-2.1-2.1-1.5,1.5,3.6,3.6,5.992-5.992Z"
            transform="translate(-2.571 -5.784)"
            fill="#2e2e22"
          />
        </svg>
      ) : null}
    </button>
  );
}
export default Dropdown;
