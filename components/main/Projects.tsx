import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/nexte.jpeg"
          title="Portofolio Moderne"
          description="Découvrez mon portfolio, un espace conçu pour présenter mes projets de manière élégante et interactive. Utilisant les dernières technologies, mon site reflète mon expertise en développement web, mobile, et logiciel."
        />
        <ProjectCard
          src="/gym.jpeg"
          title="Gym et Fitness"
          description="Transformez votre expérience de fitness avec mon application moderne et intuitive. Conçue pour les passionnés de fitness, elle vous offre un accès complet à des programmes d'entraînement personnalisés, des suivis de progression détaillés et des conseils d'experts."
        />
        <ProjectCard
          src="/hotel.jpeg"
          title="Application Hôtelière"
          description="Simplifiez vos réservations d'hôtels avec notre application moderne et pratique. Conçue pour offrir une expérience utilisateur fluide et intuitive, elle vous permet de rechercher, comparer et réserver des chambres dans des établissements partout dans le monde. "
        />
      </div>
    </div>
  );
};

export default Projects;