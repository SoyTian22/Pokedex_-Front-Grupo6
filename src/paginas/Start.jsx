import React from 'react';
import { Link } from 'react-router-dom';
import img from '../imagenes/pngegg.png'

const Start = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-cover bg-[url(https://wallpaperaccess.com/full/5818306.jpg)] flex  items-center">
          <img className='md:w-[600px] min-w-[310px] mt-[110px]' src={img} alt="" />
          <h1 className='text-yellow-200 font-bold  text-4xl'>Proyecto Final Grupo 6</h1>
          <Link to='/Login'>
          <button className='ml-10 bg-yellow-500 rounded-lg w-24'>Usuario</button>
          </Link>
          <Link to='/Inicio'>
          <button className='ml-5 bg-yellow-500 rounded-lg w-24'>Invitado</button>
          </Link>
      </div>
    </>
  )
}

export default Start