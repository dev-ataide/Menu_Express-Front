import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";
import Img from '../../../../public/woman.jpg';


export default function DetailAppointment({ isOpen, appointmentId, setOpenModalAppointment }) {
  const [mostrarSegundaDiv, setMostrarSegundaDiv] = useState(false);

  const handleClick = () => {
    setMostrarSegundaDiv(!mostrarSegundaDiv);
  };
  if (isOpen) {
    return <div>
      
<div className="fixed top-0 bottom-0 left-0 right-0 bg-cfit_bgmodal bg-opacity-80 z-50">
<button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={setOpenModalAppointment} >
               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancelar
             </button>
             
<div className="flex flex-col">
 <div className="flex items-center justify-center h-full">
   <div className="bg-white p-6 rounded-lg shadow-md flex w-[85%] h-[55%] mt-9">
     <div className="flex w-[600px] h-[340px]">
       <div className="">
         <Image src={Img} className="object-cover" alt="Login Image" />
       </div>

     </div>
     <div className="ml-auto m-10">
       <div className="m-7 text-3xl font-bold text-right text-cfit_purple ">
         <h1>Nome do Cliente</h1>
       </div>
       <div className="m-7 text-2xl font-bold text-right text-cfit_title ">
         <h1>Idade do Cliente</h1>
       </div>
       <div className="m-7 text-1xl font-bold text-right text-cfit_title ">
         <h1>(00) 9.9999-9999</h1>
       </div>
       <div className="m-7 text-1xl font-bold text-right text-cfit_title ">
         <h1>10 agendamentos disponiveis</h1>
       </div>
     </div>
   </div>
 </div>
 <div className="flex items-center justify-center h-full">

   <div className="bg-white p-6 rounded-lg shadow-md flex-col w-[85%] h-[55%] mt-9">
     <div className=" text-2xl font-bold text-left text-cfit_purple" onClick={handleClick}>
       Últimos Agendamentos
     </div>
     <div className='h-1 w-[100%] mt-3 bg-gray-200'></div>
     {mostrarSegundaDiv && (
       <div className="bg-white px-6 rounded-lg shadow-md flex w-[100%] h-[55%] mt-9">

         <table className="min-w-full leading-normal">
           <thead>
             <tr>

               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 Serviço
               </th>

               <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 Data
               </th>

             </tr>
           </thead>
           <tbody>
             <tr >

               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">agendamento.Servico.nomeServico</p>
               </td>
               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                 <p className="text-gray-900 whitespace-no-wrap">agendamento.Cliente.data</p>
               </td>
               
              
             </tr>

           </tbody>
         </table>
       </div>
     )}
     </div>
     
 </div>
 <div className="flex items-center justify-center h-full">

<div className="bg-white p-6 rounded-lg shadow-md flex-col w-[85%] h-[55%] mt-9">
<div className=" text-2xl font-bold text-left text-cfit_purple" onClick={handleClick}>
Observações Medicas
</div>
<div className='h-1 w-[100%] mt-3 bg-gray-200'></div>
{mostrarSegundaDiv && (
<div className="bg-white px-6 rounded-lg shadow-md flex w-[100%] h-[55%] mt-9">
<h1 className=" text-1xl font-bold text-right text-gray-400 ">agendamento.cliente.observacoes</h1>
</div>

)}
</div>

</div>
 
</div>
</div> 
   
    </div> 
     

  }
  return null
}

