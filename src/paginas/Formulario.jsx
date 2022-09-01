import React from 'react'
import { Link } from 'react-router-dom';




const FormularioPokemon = () => {
    return(
    <div className='h-full w-full bg-center flex-col bg-green-400'>
        <form className='h-full w-full flex-col flex-wrap bg-center bg-red-600'>
            <input className='bg-blue-600 m-5' type="Text" />
            <input className='bg-blue-600 m-5' type="Text" />
            <input className='bg-blue-600 m-5' type="Text" />
            <input className='bg-blue-600 m-5' type="Text" />
            <input className='bg-blue-600 m-5' type="Text" />
            <input className='bg-blue-600 m-5' type="Text" />
            <input className='bg-blue-600 m-5' type="File" />
            <button className='bg-green-400 m-5'>Submit</button>
            <Link to='/Inicio'>
          <button className='bg-yellow-500 rounded-lg w-24'>Pokedex</button>
          </Link>
        </form>
    </div>
        )
    }

    export default FormularioPokemon