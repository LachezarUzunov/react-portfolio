import classes from "./Portfolio.module.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`${"container"} ${classes.portfolio__container}`}>
        <article className={classes.portfolio__item}>
          <div className={classes.portfolio__item_image}>
            <img src={img1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={classes.portfolio__item_cta}>
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={classes.portfolio__item}>
          <div className={classes.portfolio__item_image}>
            <img src={img1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={classes.portfolio__item_cta}>
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={classes.portfolio__item}>
          <div className={classes.portfolio__item_image}>
            <img src={img1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={classes.portfolio__item_cta}>
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={classes.portfolio__item}>
          <div className={classes.portfolio__item_image}>
            <img src={img1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={classes.portfolio__item_cta}>
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={classes.portfolio__item}>
          <div className={classes.portfolio__item_image}>
            <img src={img1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={classes.portfolio__item_cta}>
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={classes.portfolio__item}>
          <div className={classes.portfolio__item_image}>
            <img src={img1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={classes.portfolio__item_cta}>
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
