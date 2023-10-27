import React, { useTransition, useState, useEffect } from "react";
import about from "../static/img/about.gif";
import TabButton from "./TabButton";
import "../static/css/about.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="paragraph">
        <li>Javascript</li>
        <li>Node.js</li>
        <li>EJS</li>
        <li>Express</li>
        <li>Git/Github</li>
        <li>Assembler</li>
        <li>Figma</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>SQL</li>
        <li>React</li>
        <li>APIs</li>
        <li>SCRUM</li>
        <li>OOP</li>
        <li>MVC</li>
      </ul>
    ),
  },
  {
    title: "Educacion",
    id: "educacion",
    content: (
      <ul className="paragraph">
        <li><b>Licenciatura en Sistemas</b><br></br>Universidad Nacional General Sarmiento
          </li> 
        <li><b>Bachillerato</b><br></br>Colegio San Juan, Tortuguitas</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className="paragraph">
        <li><b>Desarrollador Web Inicial</b><br></br>Argentina Programa 4.0
          </li> 
        <li><b>Desarrollador Web Full Stack</b><br></br>Digital House</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [showImage, setShowImage] = useState(false); 

  useEffect(() => {
    setShowImage(true);
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white about-section" id="about">
      <div className="image-container">
        <div>
          <img
            src={about}
            alt="Description"
            className="about-image"
            style={{
              opacity: showImage ? 1 : 0,
              transform: showImage ? "scale(1)" : "scale(0.9)",
              transition: "opacity 4s, transform 4s",
            }}
          />
        </div>
      </div>
      <div className="text-container">
        <div>
          <h2 className="title-about">Sobre Mi</h2>
          <p className="paragraph">
          Soy un programador altamente motivado y hábil con una pasión por la tecnología. Tengo una  sólida  formación académica  en  informática  y  he  estado  trabajando  en proyectos personales en mi tiempo libre para desarrollar aún más mis habilidades. Estoy seguro de que tengo las habilidades y la experiencia para hacer una contribución significativa a su empresa</p>
        </div>
        <div>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("educacion")}
            active={tab === "educacion"}
          >
            Educacion
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certificaciones")}
            active={tab === "certificaciones"}
          >
            Certificaciones
          </TabButton>
        </div>
        <div>
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
