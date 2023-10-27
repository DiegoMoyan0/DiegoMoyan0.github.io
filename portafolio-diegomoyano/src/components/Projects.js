import React from 'react';
import '../static/css/projects.css'
import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import hoteldivine from '../static/img/hoteldivine.png';
import joanvives from '../static/img/joanvives.png';
import tamoready from '../static/img/tamoready.png';
import mercadoliebre from '../static/img/mercadoliebre.jpeg';

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: 'Mercado Liebre',
      imgUrl: mercadoliebre,
      link: 'https://mercado-liebre-y2fi.onrender.com/'
    },
    {
      id: 3,
      title: 'Hotel Divine',
      imgUrl: hoteldivine,
      link: 'https://hoteldivine.github.io/'
    },
    {
      id: 4,
      title: 'Valentino Perfumo',
      imgUrl: joanvives,
      link: 'https://valentino-perfumo.vercel.app/'
    },
    {
      id: 6,
      title: ' Desafio Joan Vives',
      imgUrl: joanvives,
      link: 'https://www.joanvives-desafio.online/'
    },
    {
      id: 6,
      title: 'Tamo Ready',
      imgUrl: tamoready,
      link: 'https://tamoready.vercel.app/'
    },
  ];

  const Projects2 = projects.filter(project => project.id === 2);
  const Projects3 = projects.filter(project => project.id === 3);
  const Projects4 = projects.filter(project => project.id === 4);
  const Projects5 = projects.filter(project => project.id === 5);
  const Projects6 = projects.filter(project => project.id === 6);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 className='project-title'>Proyectos</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Todos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tiendas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Turismo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">Portfolios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">Salud</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="six">Coaches</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content >
                <Tab.Pane eventKey="first">
                  <Row >
                    {projects.map((project, index) => (
                      <Col key={index} sm={6} md={4} lg={3} className="mb-4 ">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {Projects2.map((project, index) => (
                      <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {Projects3.map((project, index) => (
                      <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <Row>
                    {Projects4.map((project, index) => (
                      <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <Row>
                    {Projects5.map((project, index) => (
                      <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="six">
                  <Row>
                    {Projects6.map((project, index) => (
                      <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Projects;
