// Nativo do next
import Head from 'next/head';

import Image from 'next/image';
import Link from 'next/link';
//React
import { useContext, FormEvent, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
// Imagem
import Img from '../../../public/imglogincfit.png';
import { format } from 'date-fns';

// Modal
import Agendar from '../../components/modals/agendar/agendar';

//Components
import Sidebar from '../../components/menu/sidebar';
import Top from '../../components/top';
import axios from 'axios'
import Mesadetail from '../../components/modals/mesadetail';



export default function Dashboard({ servicos, appointmentId }) {
  const [openModal, setOpenModal] = useState(false)
  const [openModalAppointmente, setOpenModalAppointment] = useState(false)

  const [itens, setItens] = useState([])
  const [itensPerPage, setItensPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)

  const [filtro, setFiltro] = useState(''); // Estado para armazenar o valor selecionado no filtro

  // Função para lidar com a mudança no valor do filtro
  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  // Filtrar os itens com base no valor do filtro
  const itensFiltrados = currentItens.filter((agendamento) => {
    if (filtro === '' || agendamento.Servico.nomeServico === filtro) {
      return true;
    }
    return false;
  });


  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages - 1));
  };

  return (
    <>
      <Head>
        <title>Agendamentos - Clinica Cfit</title>
      </Head>
      <div className='flex overflow-x-hidden'>
        <Sidebar />
        <div className='flex-col w-full'>
          <Top />
          {/* pagina */}
          <div className=' flex bg-menuexpress_soft_gray' >
            <div className='m-9'>
              <div className=' mt-7 ml-4 flex overflow-x-hidden'>

                <div className=" text-black text-4xl font-roboto font-bold ">
                  Pedidos na fila
                </div>
                <div className='pl-3 pt-1'>
                  <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <g id="refresh-cw">
                      <path id="Vector" d="M23.9583 4.16675V10.4167H17.7083" stroke="#ED1B30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path id="Vector_2" d="M1.04175 20.8333V14.5833H7.29175" stroke="#ED1B30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path id="Vector_3" d="M1.04175 14.5833L5.87508 19.125C6.99461 20.2451 8.37964 21.0633 9.90092 21.5033C11.4222 21.9434 13.0302 21.9909 14.5748 21.6414C16.1194 21.2919 17.5503 20.5568 18.734 19.5047C19.9177 18.4527 20.8155 17.1179 21.3438 15.625M3.65633 9.37498C4.18463 7.88205 5.08251 6.54727 6.26619 5.4952C7.44987 4.44314 8.88077 3.70807 10.4254 3.35858C11.97 3.00909 13.578 3.05658 15.0992 3.49662C16.6205 3.93665 18.0056 4.75489 19.1251 5.87498L23.9584 10.4166C23.9584 10.4166 17.7349 3.1275 12.5265 3.1275C7.3182 3.1275 4.52886 5.73935 3.65633 9.37498Z" stroke="#ED1B30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                  </svg>
                </div>

              </div>
              <div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-hidden ">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Cliente
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Serviço
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Contato
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Data
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Ida Conf
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Detalhes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {itensFiltrados.map((agendamento) => (
                        <tr key={agendamento.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <Image src={Img} className="w-10 md:w-16 rounded-full mx-auto" />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">{agendamento.Cliente.nome}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{agendamento.Servico.nomeServico}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{agendamento.Cliente.telefone}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {agendamento.dataHoraAgendamento && (
                              <p className="text-gray-900 whitespace-no-wrap">
                                {format(new Date(agendamento.dataHoraAgendamento), 'dd/MM/yyyy HH:mm')}
                              </p>
                            )}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                              className={`relative inline-block px-3 py-1 font-semibold text-white leading-tight ${agendamento.StatusDeConsulta === 'Realizada'
                                ? 'bg-green-500' // Cor verde para 'Realizada'
                                : agendamento.StatusDeConsulta === 'Pendente'
                                  ? 'bg-yellow-500' // Cor amarela para 'Pendente'
                                  : 'bg-red-500' // Cor vermelha para 'Cancelada'
                                }`}
                            >
                              <span aria-hidden className="absolute inset-0 opacity-50 rounded-md"></span>
                              <span className="relative">
                                {agendamento.StatusDeConsulta === 'Realizada'
                                  ? 'Realizada' // Texto para o status 'Realizada'
                                  : agendamento.StatusDeConsulta === 'Pendente'
                                    ? 'Pendente' // Texto para o status 'Pendente'
                                    : 'Cancelada'}{' '}
                              </span>
                            </span>
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <button onClick={() => setOpenModalAppointment(true)} type="submit">
                              <svg className='ml-5' width="24" height="24" viewBox="0 0 16 16" fill="none">
                                <rect x="1" y="1" width="14" height="14" rx="3" stroke="#D5D5D5" />
                                <path
                                  d="M3 10.917V13H5.08304L11.2266 6.85641L9.14359 4.77336L3 10.917ZM12.8375 5.24552C13.0542 5.02888 13.0542 4.67893 12.8375 4.4623L11.5377 3.16248C11.3211 2.94584 10.9711 2.94584 10.7545 3.16248L9.73795 4.179L11.821 6.26205L12.8375 5.24552Z"
                                  fill="#D5D5D5"
                                />
                              </svg>
                            </button>

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>

              </div>
              <div className='absolute top-3/4 ml-80 left-72'>
                <div className="flex items-center justify-end">
                  <button onClick={goPrevPage}>&lt;</button>
                  {Array.from(Array(pages), (index) => (
                    <button key={index} onClick={() => goToPage(index)} ></button>
                  ))}
                  <span>
                    {currentPage + 1}/{pages}
                  </span>
                  <button onClick={goNextPage}>&gt;</button>
                </div>
              </div>

            </div>
            <div className="flex-row  border-white mt-0 m-0"></div>

            <div className='flex bg-white '>
              <Mesadetail />
            </div>
            <div className="flex-row border-white mt-0 m-0"></div>

          </div>

        </div>


      </div>

    </>

  );
}