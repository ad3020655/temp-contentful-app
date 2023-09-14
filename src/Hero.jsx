import heroImg from "./assets/undraw_react.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quidem adipisci exercitationem odit, sit saepe laborum magni
            recusandae aliquam alias fuga incidunt voluptas! Ut aspernatur
            recusandae numquam consequatur fugit veritatis!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="react img" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
