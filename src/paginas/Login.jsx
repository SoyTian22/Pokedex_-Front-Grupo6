import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Login() {


  const navegar = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const verify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/register/login", {
        method: "POST",
        body: JSON.stringify({ name, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("invalid User data ");
      }
      const userFetch = await res.json();
      localStorage.setItem("token", userFetch.token);
      console.log(localStorage.getItem("token"));
      navegar("/Pokedex");
    } catch (error) {
      console.log("Error");
      alert("Usuario no registrado");
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <form action="" onSubmit={verify}>
      <div className="bg-red-500 w-[100%] h-[100%] bg-center md:w-1/2 flex flex-col justify-center">
        <label>¿Cuál es su usuario?</label>
        <input type="text" onChange={handleName} placeholder='ingrese su usuario' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl' required />
      </div>
      <div className="w-[90%] md:w-1/2 flex flex-col justify-center">
        <label>¿Cuál es su contraseña?</label>
        <input type="password" onChange={handlePassword} placeholder='ingrese su contraseña' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl' required />
      </div>
      <div className="flex justify-center">
        <button type="submit" onClick={verify} className='bg-[#ffca2a] rounded-2xl w-[100px] py-[5px] shadow-md hover:shadow-xl'>Ingresar</button>
      </div>
      <hr className='my-[50px]'/>
      <Link to='/Inicio'>
          <button className='bg-yellow-500 rounded-lg w-24'>Pokedex</button>
          </Link>
    </form>
  );
}

export default Login