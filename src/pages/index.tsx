// Nativo do next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
//React
import { useContext, FormEvent, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
// Imagem
import Img from '../../public/imglogincfit.png';

// Icones
//bug aq




export default function Home() {
  const {signIn} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    console.log('teste')
    let data = {
      email,
      password
    }
    await signIn(data)
  }
  return (
    <>
      <Head>
        <title>CFIT AGENDAMENTO - Faça seu login</title>
      </Head>
      <div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">
        {/* Left: Image */}
        <div className="w-1/2 hidden lg:block">
          <Image src={Img} className="object-cover w-full h-full" alt="Login Image" />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full h-full lg:w-1/2">
          <h1 className="text-2xl font-semibold my-32 text-center">Aqui vai a logo da empresa</h1>
          <form  onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md pl-12 py-2 px-3 focus:outline-none focus:border-cfit_purple"
                autoComplete="off"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password Input */}
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md pl-12 py-2 px-3 focus:outline-none focus:border-cfit_purple"
                autoComplete="off"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="cfit_purple" />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Lembre-me
              </label>
            </div>
            {/* Forgot Password Link */}
            <div className="mb-6 text-cfit_purpledark">
              <a href="#" className="hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            {/* Login Button */}
                <button type="submit" className="bg-cfit_purple hover:bg-cfit_purpledark text-white font-semibold rounded-md py-2 px-4 w-full"> 
                <a >Login</a>
                </button>

          </form>
        </div>
      </div>
    </>
  );
}
