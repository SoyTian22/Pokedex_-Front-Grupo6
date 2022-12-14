import React ,{useState} from 'react'
import Pokeball from '../../imagenes/Pokeball.png'
import {Link} from 'react-router-dom'
import Open_pokeball from '../../imagenes/Open_pokeball.png'



const Header = ({handleString, handleNumeric}) => {
    
  const [sortByNumber, setSortByNumber] = useState(true)

  const handleChange = () => {
    if(!sortByNumber) {
     handleString()
    } else {
      handleNumeric()
    }
    setSortByNumber(!sortByNumber)
  }

 

  return (
    <div className=' ml-4 mt-4 mb-2 flex flex-row'>
        <img
        className='w-[30px] h-[30px] '
        src={Pokeball}  alt="" />

        <h1
        className='font-[1000] text-gray-800 text-2xl ml-6'
        >Pokédex</h1>

        <Link
        to={`/FormularioPokemon/ `}
        >
        <img src={Open_pokeball} className='w-[30px] h-[30px] ml-[100px]'></img>
        </Link>


          <button
          className='ml-[25px]'
          onClick={() => handleChange()}
          >

            {sortByNumber ? <i className={`fa-solid hover:border-2 hover:shadow-lg text-[25px] fa-arrow-down-a-z`}></i> :  <i className={`fa-solid text-[25px] hover:shadow-lg fa-arrow-down-1-9`}></i>}
             
            
          
      
          </button>
    </div>
  )
}

export default Header