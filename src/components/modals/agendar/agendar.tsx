import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";

export default function Agendar({ isOpen, servicos, setModalOpen }) {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [filtro, setFiltro] = useState(''); // Estado para armazenar o valor selecionado no filtro
  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [selectedDate, setselectedDate] = useState(null);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value })
  }

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value })
  }

  const dateFormatAux = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  const dateFormat = (date) => {

    console.log(new Date(date));

    let formatYearMonthDay = dateFormatAux(date);
    //console.log(formatYearMonthDay);

    let formatISO8601 = new Date(date).toISOString();
    //console.log(formatISO8601);

    return [formatYearMonthDay, formatISO8601];
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let birthDateYMD, birthDateISO8601;

    if (selectedDate != null)
      [birthDateYMD, birthDateISO8601] = dateFormat(selectedDate);

    if (values.firstName && values.lastName && values.email)
      setValid(true)
    setSubmitted(true);

    let formData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      birthDate: selectedDate,
      birthDateFmtYMD: birthDateYMD,
      birthDateFmtISO8601: birthDateISO8601,
    };

    console.log(formData);
  }
  if (isOpen) {
    return <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-50" >
      <div className="fixed top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-100%]  rounded-md w-96 h-96" >
        <div className=" bg-gray-100 flex flex-col justify-center">
          <div className="relative">
            <div className="relative px-4 py-10  mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Crie um cliente e agende um atendimento </h2>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Nome do Paciente</label>
                      {submitted && valid ? <div className="success-message">Agendamento realizado</div> : null}
                      <input
                        onChange={handleFirstNameInputChange}
                        value={values.firstName}
                        id="first-name"
                        type="text"
                        placeholder="Nome do Paciente"
                        name="firstName"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Email do Paciente</label>
                      {submitted && !values.lastName ? <span id="">Por favor adicione um email valido</span> : null}
                      <input
                        onChange={handleEmailInputChange}
                        value={values.email}
                        id="email"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        type="text"
                        placeholder="Email do Paciente"
                        name="email"
                      />       </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Serviços</label>
                      <select
                        className="px-4 py-2 border focus:bg-white bg-white focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" value={filtro}
                        onChange={handleFiltroChange}
                      >
                        <option value="">Escolha um serviço</option>
                        {servicos.map((servico) => (
                          <option key={servico.id} value={servico.nomeServico}>
                            {servico.nomeServico}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">Data de Agendamento</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          {submitted && !values.email ? <span id="agendamento-error">Agendamento</span> : null}
                          <DatePicker
                            selected={selectedDate}
                            onChange={date => setselectedDate(date)}
                            showTimeSelect
                            dateFormat="dd/MM/yyyy"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" id="birthDate"
                            placeholderText="Data"
                          //minDate={new Date()}
                          />                          <div className="absolute left-3 top-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Observações</label>
                      <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Observação" />
                    </div>

                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={setModalOpen} >
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancelar
                    </button>
                    <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Agendar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  return null
}


export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:8080/servicos');
    const servicos = response.data;
    return {
      props: { servicos },
    };
  } catch (error) {
    console.error('Erro ao buscar os serviços:', error);
    return {
      props: { servicos: [] },
    };
  }
}

// function ($scope, $window,$timeout) {
// 	var c = this;
// 	c.translationHide = false;
// 	c.languages = [
// 		{
// 			label: 'Português do Brasil',
// 			translateKey: '${brcoe_login_portuguese}',
// 			key: 'pb'
// 		},
// 		{
// 			label: 'English',
// 			translateKey: '${brcoe_login_english}',
// 			key: 'en'
// 		},
// 		{
// 			label: 'Español',
// 			translateKey: '${brcoe_login_spanish}',
// 			key: 'es'
// 		}
// 	];
// 	$scope.setLanguage = function(value,label) {
// 		$scope.data.newLanguage = value;
// 		$scope.data.notPersist = c.data.notPersist;
// 		$scope.server.update();

// 		$timeout(windowRefresh,'250');
// 		function windowRefresh() {
// 			$window.location.reload();
// 		}
// 	};
// }