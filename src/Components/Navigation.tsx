import React, { useRef } from 'react';
import './NavBar.css';
import ACTIONS from './CategoriesICONS/pizzaboy_navigation_Aktion.svg'; 
import SAVINGS from './CategoriesICONS/i_sparmenues.svg'; 
import SALADS from './CategoriesICONS/pizzaboy_navigation_Salate.svg';
import PIZZA from './CategoriesICONS/pizzaboy_navigation_Pizza.svg';
import BUN from './CategoriesICONS/pizzaboy_navigation_Panini.svg';
import PASTA from './CategoriesICONS/pizzaboy_navigation_Pasta.svg';
import CASOROLES from './CategoriesICONS/pizzaboy_navigation_Aufläufe.svg';
import INTERNATIONAL from './CategoriesICONS/pizzaboy_navigation_International.svg';
import BURGER from './CategoriesICONS/pizzaboy_navigation_Burger.svg';
import ASIA from './CategoriesICONS/pizzaboy_navigation_Aisa.svg';
import VEGETARIAN from './CategoriesICONS/pizzaboy_navigation_Vegetarisch.svg';
import SIDE from './CategoriesICONS/pizzaboy_navigation_Beilagen.svg';
import DIPS from './CategoriesICONS/pizzaboy_navigation_dips-saucen.svg';
import KIDS from './CategoriesICONS/pizzaboy_navigation_Kids.svg';
import BEVERAGES from './CategoriesICONS/pizzaboy_navigation_Getränke.svg';
import DESSERT from './CategoriesICONS/pizzaboy_navigation_Dessert.svg';
import LeftArrow from './CategoriesICONS/Leftarrow.svg'
import RightArrow from './CategoriesICONS/Rightarrow.svg'




interface Category {
  name: string;
  // icon: React.FC<React.SVGProps<SVGSVGElement>>; 
  icon:string;
}

interface NavBarProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}


const NavBar: React.FC<NavBarProps> = ({activeIndex, setActiveIndex}) => {
  const categories: Category[] = [
    { name: 'ACTIONS', icon: ACTIONS }, 
    { name: 'SAVINGS MENUS', icon: SAVINGS }, 
    { name: 'SALADS', icon: SALADS }, 
    { name: 'PIZZA', icon: PIZZA }, 
    { name: 'PIZZA BUN', icon: BUN }, 
    { name: 'PASTA', icon: PASTA }, 
    { name: 'CASOROLES', icon: CASOROLES }, 
    { name: 'INTERNATIONAL', icon: INTERNATIONAL }, 
    { name: 'BURGER', icon: BURGER }, 
    { name: 'ASIA', icon: ASIA }, 
    { name: 'VEGETARIAN', icon: VEGETARIAN }, 
    { name: 'SIDE DISHES', icon: SIDE }, 
    { name: 'DIPS + SAUCES', icon: DIPS }, 
    { name: 'KIDS', icon: KIDS }, 
    { name: 'BEVERAGES', icon: BEVERAGES }, 
    { name: 'DESSERT', icon: DESSERT }, 

  ];

  const navRef = useRef<HTMLDivElement>(null);
  

  const scroll = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = navRef.current.clientWidth;
      navRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (navRef.current) {
      const scrollAmount = navRef.current.clientWidth;
      const leftPosition = index * (scrollAmount / 6);
      navRef.current.scrollTo({ left: leftPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-container">
       <button className="nav-arrowL" onClick={() => scroll('left')}>
        <img src={LeftArrow} alt="Left Arrow" className="arrow-icon" />
      </button>
      <div className="navbar" ref={navRef}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`nav-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={category.icon} alt={category.name + ' Icon'} className="nav-icon" />
            {category.name}
          </div>
        ))}
      </div>
      <button className="nav-arrowR" onClick={() => scroll('right')}>
        <img src={RightArrow} alt="Left Arrow" className="arrow-icon" />
      </button>
    </div>
  );
};

export default NavBar;








// import React, { useRef, useState } from 'react';
// import './NavBar.css';
// import { ReactComponent as ACTIONS } from './CategoriesICONS/pizzaboy_navigation_Aktion.svg'; 
// import { ReactComponent as SAVINGS } from './CategoriesICONS/i_sparmenues.svg'; 
// import { ReactComponent as SALADS } from './CategoriesICONS/pizzaboy_navigation_Salate.svg';
// import { ReactComponent as PIZZA } from './CategoriesICONS/pizzaboy_navigation_Pizza.svg';
// import { ReactComponent as BUN } from './CategoriesICONS/pizzaboy_navigation_Panini.svg';
// import { ReactComponent as PASTA } from './CategoriesICONS/pizzaboy_navigation_Pasta.svg';
// import { ReactComponent as CASOROLES } from './CategoriesICONS/pizzaboy_navigation_Aufläufe.svg';
// import { ReactComponent as INTERNATIONAL } from './CategoriesICONS/pizzaboy_navigation_International.svg';
// import { ReactComponent as BURGER } from './CategoriesICONS/pizzaboy_navigation_Burger.svg';
// import { ReactComponent as ASIA } from './CategoriesICONS/pizzaboy_navigation_Aisa.svg';
// import { ReactComponent as VEGETARIAN } from './CategoriesICONS/pizzaboy_navigation_Vegetarisch.svg';
// import { ReactComponent as SIDE } from './CategoriesICONS/pizzaboy_navigation_Beilagen.svg';
// import { ReactComponent as DIPS } from './CategoriesICONS/pizzaboy_navigation_dips-saucen.svg';
// import { ReactComponent as KIDS } from './CategoriesICONS/pizzaboy_navigation_Kids.svg';
// import { ReactComponent as BEVERAGES } from './CategoriesICONS/pizzaboy_navigation_Getränke.svg';
// import { ReactComponent as DESSERT } from './CategoriesICONS/pizzaboy_navigation_Dessert.svg';
// import { ReactComponent as LeftArrow } from './CategoriesICONS/Leftarrow.svg';
// import { ReactComponent as RightArrow } from './CategoriesICONS/Rightarrow.svg';

// interface Category {
//   name: string;
//   icon: React.FC<React.SVGProps<SVGSVGElement>>; 
// }

// const NavBar: React.FC = () => {
//   const categories: Category[] = [
//     { name: 'ACTIONS', icon: ACTIONS }, 
//     { name: 'SAVINGS MENUS', icon: SAVINGS }, 
//     { name: 'SALADS', icon: SALADS }, 
//     { name: 'PIZZA', icon: PIZZA }, 
//     { name: 'PIZZA BUN', icon: BUN }, 
//     { name: 'PASTA', icon: PASTA }, 
//     { name: 'CASOROLES', icon: CASOROLES }, 
//     { name: 'INTERNATIONAL', icon: INTERNATIONAL }, 
//     { name: 'BURGER', icon: BURGER }, 
//     { name: 'ASIA', icon: ASIA }, 
//     { name: 'VEGETARIAN', icon: VEGETARIAN }, 
//     { name: 'SIDE DISHES', icon: SIDE }, 
//     { name: 'DIPS + SAUCES', icon: DIPS }, 
//     { name: 'KIDS', icon: KIDS }, 
//     { name: 'BEVERAGES', icon: BEVERAGES }, 
//     { name: 'DESSERT', icon: DESSERT }, 
//   ];

//   const navRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   const scroll = (direction: 'left' | 'right') => {
//     if (navRef.current) {
//       const scrollAmount = navRef.current.clientWidth;
//       navRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
//     }
//   };

//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//     if (navRef.current) {
//       const scrollAmount = navRef.current.clientWidth;
//       const leftPosition = index * (scrollAmount / 6);
//       navRef.current.scrollTo({ left: leftPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="navbar-container">
//        <button className="nav-arrowL" onClick={() => scroll('left')}>
//         <LeftArrow className="arrow-icon" />
//       </button>
//       <div className="navbar" ref={navRef}>
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className={`nav-item ${activeIndex === index ? 'active' : ''}`}
//             onClick={() => handleClick(index)}
//           >
//             <category.icon className="nav-icon" />
//             {category.name}
//           </div>
//         ))}
//       </div>
//       <button className="nav-arrowR" onClick={() => scroll('right')}>
//         <RightArrow className="arrow-icon" />
//       </button>
//     </div>
//   );
// };

// export default NavBar;

