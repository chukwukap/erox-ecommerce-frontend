import { Link } from "react-router-dom";

function NewsTeaser() {
  return (
    <article className="news-teaser">
      <img
        className="news-teaser__img"
        src="assets/img/teaser.png"
        alt="news"
      />
      <div className="meta">
        <h1 className="news-teaser__title">Lorem ipsum dolar et</h1>
        <p className="news-teaser__prgh">
          Lorem ipsum dolor sit amet, consetetur sadising elitr, sed diam nonumy
          eirmod
        </p>
        <Link className="news-teaser__link">Read</Link>
      </div>
    </article>
  );
}

export default NewsTeaser;
