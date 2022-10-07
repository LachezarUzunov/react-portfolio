import classes from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className={`${"container"} ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>ANGULAR</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>JavaScrpt</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icon} />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
