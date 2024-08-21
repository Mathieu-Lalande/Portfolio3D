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
      Les projets suivants mettent en valeur mes compétences Frontend et mon expérience à 
      travers des exemples concrets de mon travail sur des projets personnels. Chaque projet est brièvement 
      décrit avec des liens vers des référentiels de code et des démos en direct.
      </p>

      <div className='flex flex-wrap my-20 gap-16 rounded-xl'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
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
