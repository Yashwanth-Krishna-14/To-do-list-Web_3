import React from 'react';
 
 import {HiMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai" 
import logo from "../../images/to-do-list-logo.png" 



const NavbarItem = ({props,title}) => {
    return (
        <div>
            <li className={`mx-4 cursor-pointer ${props}`}> {title}</li>
            
        </div>
    );
};


const Navbar = (props) => {


    const [ToggleMenu,setToggleMenu] = React.useState(false)

    return (
        <div className='w-full flex md:justify-centre justify-between items-center'>
           
            
            <div className='md:flex-[0.5] flex-initial justify-centre items-center w-50'>
             
                <img src = {logo} alt = "logo" className='w-20 cursor-pointer '></img>
                <p className='text-white justify-items-start flex-initial'>Kryton</p>
              

            </div>
         
            
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
            {["Market" ,'Exchange' , 'Tutorials','Wallets'].map((item,index)=>(

                <NavbarItem key = {item+index} title={item}></NavbarItem>
            ))}
            <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bb]'>Login</li>

            </ul>
            <div className='flex relative'>
                {ToggleMenu ? 
                
                <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(false)}></AiOutlineClose> : 

                <HiMenuAlt4  fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(true)}></HiMenuAlt4>}

                {ToggleMenu && (
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                        <li className='text-xl w-full my-full'>
                        <AiOutlineClose onClick={()=> setToggleMenu(false)}></AiOutlineClose>
                        </li>
                        {["Market" ,'Exchange' , 'Tutorials','Wallets'].map((item,index)=>(

                        <NavbarItem key = {item+index} title={item} classProps = "my-2 text-lg"></NavbarItem>
                        ))}


                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;

