import React from 'react';

const Button = ({ text }) => {
  
  function signUp(){
    let data = { name,
      email,
      password,
      }

      console.warn(data)
  }
  return (
    <div className='flex justify-center my-7'>
  <button type="submit" onClick={signUp} className='px-2 w-3/4 hover:bg-brown border-border border-2 text-black font-Montserrat hover:text-white text-base md:w-1/4 rounded-md py-2'>{text}</button>
  </div>
  );
};

export default Button