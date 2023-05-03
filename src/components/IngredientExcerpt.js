function IngredientExcerpt({ ingredient }) {
  return (
    <article className="ingredient-excerpt">
      <img
        className="ingredient-excerpt__img"
        src="assets/img/ingredient.png"
        alt="cacao ingredient"
      />
      <div className="meta">
        <h1 className="ingredient-section__name">Cacao</h1>
        <p className="ingredient-section__desc">Lorem Ipsum dolar et al</p>
      </div>
    </article>
  );
}

export default IngredientExcerpt;
