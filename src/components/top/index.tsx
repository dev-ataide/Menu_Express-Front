import Image from 'next/image';
import Img from '../../../public/avatarfigma.png';

import Link from 'next/link';

export default function Top() {

    return (
        <div>
            <div className="flex justify-between bg-white w-full">
                {/* Primeira div (canto esquerdo) */}
                <div className='mt-8'>
                    <div id="profile" className="space-y-2 flex ml-2">
                        <Image src={Img} className="w-10 md:w-16 rounded-full mx-auto" />
                        <div>
                            <h2 className="font-medium text-xs md:text-sm text-left ml-2 mt-1 text-cfit_purple">
                                Administrador
                            </h2>
                            <p className="text-xs text-black text-left ml-2">
                                {/* {user.email} Use o email do usuário do contexto */}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Segunda div (canto direito) */}
                <div className="flex flex-row justify-center items-center align-middle gap-11 ">
                    <div className="flex border-2 border-gray-200 rounded-md mt-5 ">

                        <a><h1>Nova Categoria</h1></a>

                    </div>

                    {/* Terceira div (opcional) */}
                    <div className="flex border-2 border-gray-200 rounded-md mt-5 mr-5 ">
                        <a><h1>Nova Categoria</h1></a>
                    </div>
                    <Link href="/aguardando_retirada" >
                        <a className="text-sm font-medium pl-4 py-2 mt-6 hover:text-black rounded-md transition duration-150 ease-in-out">
                        
                            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0956 0.166277C20.539 -0.0554257 21.061 -0.0554257 21.5044 0.166277L36.7294 7.77878C37.2629 8.04557 37.6 8.59094 37.6 9.1875C37.6 9.78407 37.2629 10.3294 36.7294 10.5962L21.5044 18.2087C21.061 18.4304 20.539 18.4304 20.0956 18.2087L4.87064 10.5962C4.33705 10.3294 4 9.78407 4 9.1875C4 8.59094 4.33705 8.04557 4.87064 7.77878L20.0956 0.166277ZM9.09681 9.1875L20.8 15.0391L32.5032 9.1875L20.8 3.3359L9.09681 9.1875ZM4.16662 23.7085C4.55563 22.9305 5.50169 22.6151 6.27971 23.0041L20.8003 30.2644L35.321 23.0041C36.099 22.6151 37.0451 22.9305 37.4341 23.7085C37.8231 24.4865 37.5077 25.4326 36.7297 25.8216L21.5047 33.4341C21.0613 33.6558 20.5394 33.6558 20.096 33.4341L4.87098 25.8216C4.09297 25.4326 3.77761 24.4865 4.16662 23.7085ZM6.27971 15.3916C5.50169 15.0026 4.55563 15.318 4.16662 16.096C3.77761 16.874 4.09297 17.8201 4.87098 18.2091L20.096 25.8216C20.5394 26.0433 21.0613 26.0433 21.5047 25.8216L36.7297 18.2091C37.5077 17.8201 37.8231 16.874 37.4341 16.096C37.0451 15.318 36.099 15.0026 35.321 15.3916L20.8003 22.6519L6.27971 15.3916Z" />
                            </svg>
                        </a>
                    </Link>

                </div>




            </div>
            <div className="flex border-2 border-white rounded-md mt-5"></div>

        </div>

    );
}



