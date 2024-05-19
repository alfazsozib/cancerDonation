import React from 'react';
import { GiCrossMark } from "react-icons/gi";

function LoginModal({ setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
       <div className='w-[50rem] relative flex justify-center items-center h-96 bg-[#001c25b0] rounded-xl'>
        <div className='absolute top-2 cursor-pointer right-4'>
            <GiCrossMark onClick={closeModal}  size={40} color='white'/>
        </div>
            <div>
                <div className='flex flex-col gap-4'>
                    <input className='px-20 py-2 rounded-lg' type="text" placeholder='Enter Email Address' />
                    <input className='px-20 py-2 rounded-lg' type="text" placeholder='Enter Password' />
                    <button className='bg-[#000000] font-serif text-white hover:bg-white hover:text-black font-bold py-2 rounded-lg'>Login</button>
                    <button className='bg-[#000000] font-serif text-white hover:bg-white hover:text-black font-bold py-2 rounded-lg'>Register</button>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default LoginModal;
