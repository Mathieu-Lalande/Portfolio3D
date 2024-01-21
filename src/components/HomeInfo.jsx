import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Bonjour, je suis
        <span className='font-semibold mx-2 text-white'>Mathieu</span>
        👋
        <br />
        Un développeur frontend & intégrateur Français 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          J'ai travaillé avec de nombreuses entreprises me permettant<br /> de monter en compétence sur de nombreux sujets.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          En savoir plus
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          J'ai mené de nombreux projets à terme durant ces années. <br /> Curieux d'en savoir plus ?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visitez mon portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Vous avez des questions ? <br/> Je suis à quelques clic de vous !
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Parlons-en !
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
