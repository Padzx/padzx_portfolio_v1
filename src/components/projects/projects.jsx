import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.scss";
import { FaGithub } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Jupyter Datahub",
    img: "image.jpg",
    desc: "Este repositório contém um ambiente de desenvolvimento para análise de dados usando Apache Spark, JupyterLab e PostgreSQL, todos executados em contêineres Docker. Uitlizamos também métodos CI/CD com o Github Actions para construção das imagens Docker e para automatizar processos e as atualizações futuras das imagens.",
    link: "https://github.com/Padzx/spark-standalone-postgresql-on-docker"
  },
  {
    id: 2,
    title: "Dashboard Feminicide",
    img: "image1.jpg",
    desc: "O Dashboard Feminicídio traz dados reais da Secretária da Segurança Pública (SSP), com um dashboard interativo o Dashboard Feminicídio tras os mais variados tipos de dados para potencializar ainda mais as análises macro e micro (sendo morte por ano, mês, cor de pele e profissão), feito com dash e plotly, utilizamos também Pandas para manipulação de Data Frame",
    link: "https://github.com/Padzx/Projetc_Femicide"
  },

  {
    id: 3,
    title: "ETL Workflow on AWS",
    img: "image2.jpg",
    desc: "Um projeto abrangente de fluxo de trabalho ETL que emprega AWS, Apache Airflow, Docker e Práticas CI/CD para demonstrar processamento de dados eficiente e automação de pipeline.",
    link: "https://github.com/Padzx/comprehensive-etl-workflow/tree/main"
  },

  {
    id: 4,
    title: "Previsão de Diabetes com Machine Learning",
    img: "image3.jpg",
    desc: "Projeto com Machine Learning para prevenção de diabetes, um ambiente automatizado com pipeline de ingestão de dadosProjeto com Machine Learning para prevenção de diabetes, um ambiente automatizado com pipeline de ingestão de dados, utilizando Python, bibliotecas de machine learning e Pandas e MLflow para o gerenciamento dos treinamentos e modelos de machine learning.",
    link: "https://github.com/Padzx/medical-treatment-personalization"
  },


];

const Project = ({ item }) => {
  return (
    <div className="project">
      <div className="imageContainer">
        <img src={item.img} alt="" style={{ width: "900px", height: "300px", margin: "0 auto", borderRadius: "50px" }} />
      </div>
      <div className="textContainer">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button>
            <FaGithub className="icon-git"/>
          </button>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {items.map((item) => (
          <Project key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
