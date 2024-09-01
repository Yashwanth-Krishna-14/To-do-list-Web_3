import React from 'react';
/*  import { AiFillPlayCircle } from "react-icons/ai"; */
import { SiEthereum } from "react-icons/si";
 import { BsInfoCircle } from "react-icons/bs";
/*import loader from "./"  */
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const Welcome = (props) => {


 
    
    const connectWallet = (props) => {
        return (
            <div>
                
            </div>
        );
    };
   
    return (
        <div className='flex w-full justify-center items-center'>
           <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
            <div className='flex flex-1 justify-start flex-col md:mr-10'>
                <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
                    Send Baby pravin across world
                </h1>
                <p className='text-left mt-5 text-white font-light md:w-9/12 w:11/12 text-base'>
                    Explore cryto world . Buy and sell crytpto currency easily 
                </p>
                <button type ="button" onClick={connectWallet} className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bb]'>
                    <p className='text-white text-base font-semibold'>
                        Connect Wallet</p></button>
                {/* <div className='grid sm:grid-cols-3 grid-cols-2 w-4 mt-10'></div>
                    <div className={`rounded-tl-2xl ${commonStyles}`}>
                        Reliability</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>ethereum</div>
 */}
                <div className=" flex items-center justify-center">
      <div className="grid grid-rows-2 grid-cols-3 gap-4 p-4 rounded-lg shadow-lg">
        <div className="bg-blue-500 text-white rounded-lg p-4">Reliability</div>
        <div className="bg-green-500  text-white rounded-lg p-4">Security</div>
        <div className="bg-red-500  text-white rounded-lg p-4">Ethereum</div>
        <div className="bg-yellow-500  text-white rounded-lg p-4">Web 3.0</div>
        <div className="bg-purple-500  text-white rounded-lg p-4">Low fess</div>
        <div className="bg-pink-500  text-white rounded-lg p-4">BlockChain</div>
      </div>
    </div>
   
                
            </div>
            <div className='flex flex-col flex-1 items-center justify-center w-full md:mt-0'>
        <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
                <div className='flex justify-items-start items-start'>
                    <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                        <SiEthereum fontSize={21} color='#fff'></SiEthereum>
                        

                    </div>
                    
                    <BsInfoCircle fontSize={17} color='fff'></BsInfoCircle>
                    
                    
                    

                </div>
                
            </div>

        </div>

    </div>
           </div>
        </div>
    );
};

export default Welcome;