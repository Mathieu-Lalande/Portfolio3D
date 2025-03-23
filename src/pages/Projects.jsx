import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Mes{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projets
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Les projets suivants illustrent mon expertise en développement Frontend à travers des réalisations concrètes. 
        Chaque projet met en avant mes compétences techniques et mon approche du design, avec une brève description 
        accompagnée de liens vers les référentiels de code et des démonstrations en ligne.
      </p>

      <div className='flex flex-wrap my-20 gap-16 rounded-xl'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <img
                src={project.imageUrl}
                alt={project.name}
                className='mt-5 w-full h-auto object-contain max-h-80 rounded-xl'
              />
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                {project.Gitlink && (
                  <>
                    <Link
                      to={project.Gitlink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'
                    >
                      Lien vers Github
                    </Link>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain mr-10'
                    />
                  </>
                )}
                {project.SeeLink && (
                  <>
                    <Link
                      to={project.SeeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'
                    >
                      Voir le projet
                    </Link>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;