import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "blue-gradient_text" : "text-black" }>
          À propos
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "blue-gradient_text" : "text-black"}>
          Projets
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
