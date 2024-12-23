import timeLogo from "../images/time_logo.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <header className="hero">
        <section className="hero__content">
          <img
            className="content__logo"
            src={timeLogo}
            alt="La máquina del tiempo"
          />
          <p className="content__slogan">
            Cada clic, un salto al pasado o al futuro.
          </p>
          <div className="content__button">
            <Link to="/contador" className="button__a">
              ¡Explorar el Tiempo!
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}

export default LandingPage;
