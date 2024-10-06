import React from 'react';
import "./projects.css";
import pic1 from "../images/portfolio-01.jpg";
import pic2 from "../images/portfolio-02.jpg";
import pic3 from "../images/portfolio-03.jpg";
import pic4 from "../images/portfolio-04.jpg";

const Projects = () => {
  const Portfolio = [
    {
      img: pic1,
      text: "Website Builder",
      text2: "Marketing",
    },
    {
      img: pic2,
      text: "Website Builder",
      text2: "Marketing",
    },
    {
      img: pic3,
      text: "Website Builder",
      text2: "Marketing",
    },
    {
      img: pic4,
      text: "Website Builder",
      text2: "Marketing",
    },
  ];

  return (
    <>
      <div className="containerP container">
        <div className="textP">
          <h4>Our Portfolio</h4>
          <h1>See Our Recent <span>Projects</span></h1>
        </div>
        <div className="projectsP">
          <div className="projects">
            {Portfolio.map((item, index) => (
              <div className="proj1" key={index}>
                <img src={item.img} alt={item.text} />
                <p><strong>{item.text}</strong></p>
                <p>{item.text2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
