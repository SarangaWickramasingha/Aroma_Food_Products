import React from 'react';
import NavItem from './NavItem';

const Navbar = ({scrollToProduct,Storypage,Blogpage,Contactpage}) => {
  return (
    <nav className="flex justify-around items-center  py-10 gap-91.5 bg-transparant text-white w-full z-50">
      <div className="text-[32px] font-bold tracking-widest cursor-pointer">
        AROMA
      </div>

      <ul className="flex gap-24.25 text-[24px] font-medium justify-evenly">
                  
          <NavItem title="Product" scoll={scrollToProduct}/>
          <NavItem title="Story" scoll={Storypage}/>
          <NavItem title="Blog" scoll={Blogpage}/>
          <NavItem title="Contact" scoll={Contactpage}/>

      </ul>
    </nav>
  );
};

export default Navbar;