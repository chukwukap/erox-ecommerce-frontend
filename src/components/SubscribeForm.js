function SubscribeForm({ placeholder, className = "" }) {
  function handleSubmit(ev) {
    ev.preventDefault();
  }
  return (
    <form className={`subscribe-form ${className}`} onSubmit={handleSubmit}>
      <input
        placeholder={placeholder || ""}
        className={
          className.includes("subscribe-form--outline")
            ? "subscribe-form__input subscribe-form__input--outline  "
            : "subscribe-form__input"
        }
      />
      <button
        className={
          className.includes("subscribe-form--outline")
            ? "subscribe-form__btn subscribe-form__btn--outline  "
            : "subscribe-form__btn "
        }
      >
        Subscribe
      </button>
    </form>
  );
}

export default SubscribeForm;
