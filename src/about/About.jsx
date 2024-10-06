import "./about.css";
import photo from "../images/about-dec.png";

const About = () => {
  return (
    <>
      <div className="containerA container">
        <div className="left-cont-a">
          <img src={photo} alt="about-photo" />
        </div>
        <div className="right-cont-a">
          <h6>ABOUT US</h6>
          <h1>
            Who Is Digital <span>Agency</span>
          </h1>
          <p>
            We hope this DigiMedia template is useful for your work. You can use this template for any purpose. You may{' '}
            <span>contribute a little amount</span> via PayPal to <span>support TemplateMo</span> in creating new templates regularly.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
