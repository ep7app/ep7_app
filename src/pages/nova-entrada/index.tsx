import { Button } from "@/components/ui/button";
import { FORM_STEPPS } from "@/constraints";
import {
  ProfileAlocacaoFormValues,
  ProfileCarreiraFormValues,
  ProfileFormValues,
  profileAlocacaoSchema,
  profileCarreiraSchema,
  profileDefaultValues,
  profileSchema,
} from "@/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function NovaEntrada() {
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: profileDefaultValues,
    mode: "onChange",
  });

  const carreiraForm = useForm<ProfileCarreiraFormValues>({
    resolver: zodResolver(profileCarreiraSchema),
    mode: "onChange",
  });

  const alocacaoForm = useForm<ProfileAlocacaoFormValues>({
    resolver: zodResolver(profileAlocacaoSchema),
    mode: "onChange",
  });

  // function onSubmit(data: ProfileFormValues) {}

  return (
    <div>
      <ul className="flex gap-x-6 items-center  border-y border-gray-200 mb-20">
        {FORM_STEPPS.map((_status) => (
          <li key={_status.name}>
            <button className="flex gap-x-2 items-center py-5 px-1 text-gray-500 hover:text-indigo-600">
              <span className="font-medium text-base"> {_status.name} </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid grid-cols-8 w-full border-b border-gray-900/10">
        <div className="col-span-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Informação do Perfil
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 max-w-[16rem] ">
            Preencha os dados pessoais do trabalhador.
          </p>
        </div>

        <div className="col-span-5">
          <div className=" pb-12">
            <form className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Primeiro nome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...profileForm.register("nome")}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Último nome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...profileForm.register("apelido")}
                  />
                </div>
              </div>

              <div className="col-span-full ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sexo
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...profileForm.register("sexo")}
                  >
                    <option>Masculino</option>
                    <option>Feminino</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data de nascimento
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...profileForm.register("data_nascimento")}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-8 w-full border-b border-gray-900/10">
        <div className="col-span-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Carreira
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 max-w-[16rem] ">
            Preencha os dados da carreira do trabalhador.
          </p>
        </div>

        <div className="col-span-5">
          <div className=" pb-12">
            <form className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Carreira
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...carreiraForm.register("carreira")}
                  >
                    <option value={1}>Contabilista</option>
                    <option value={2}>Medico Legista</option>
                    <option value={3}>Assistente Tenico De Saude</option>
                    <option value={4}>Agente De Saude</option>
                    <option value={5}>Agente Universitario</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Categoria
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...carreiraForm.register("Categoria")}
                  >
                    <option value="1">Mestre Costeiro</option>
                    <option value="2">Contra Mestre</option>
                    <option value="3">Arrais de Tráfego Local</option>
                    <option value="4">Motorista de Embarcação</option>
                    <option value="5">Marinheiro</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Especialidade
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...carreiraForm.register("especialiodade")}
                  >
                    <option value="1">
                      Administração das Unidades Sanitárias
                    </option>
                    <option value="2">Análises Clínicas</option>
                    <option value="3">Anatomia Patológica</option>
                    <option value="4">Anestesia Cardiotoráxica</option>
                    <option value="5">Anestesia e Reanimacao</option>
                    <option value="5">Não aplicável</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cargo e Função
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...carreiraForm.register("cargo")}
                  >
                    <option value="1">
                      Administração das Unidades Sanitárias
                    </option>
                    <option value="2">Adido Consular</option>
                    <option value="3">
                      Adido De Imprensa Do Presidente Da Republica
                    </option>
                    <option value="4">Administrador De Hospital Geral</option>
                    <option value="5">Administrador De Hospital Rural</option>
                    <option value="5">Não aplicável</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tipo de Vinculação
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...carreiraForm.register("tipoVinculacao")}
                  >
                    <option value="1">
                      Administração das Unidades Sanitárias
                    </option>
                    <option value="2">Análises Clínicas</option>
                    <option value="3">Anatomia Patológica</option>
                    <option value="4">Anestesia Cardiotoráxica</option>
                    <option value="5">Anestesia e Reanimacao</option>
                    <option value="5">Não aplicável</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-8 w-full border-b border-gray-900/10">
        <div className="col-span-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Alocação
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 max-w-[16rem] ">
            Preencha os dados da alocação e o tipo de entrada.
          </p>
        </div>

        <div className="col-span-5">
          <div className=" pb-12">
            <form className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Provincia
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...alocacaoForm.register("provincia")}
                  >
                    <option value="1">Maputo</option>
                    <option value="2">Gaza</option>
                    <option value="3">Inhambane</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Distrito
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...alocacaoForm.register("distrito")}
                  >
                    <option value="1">Kamavota</option>
                    <option value="2">Kanhaka</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Estabelecimento
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...alocacaoForm.register("estabelecimento")}
                  >
                    <option value="1">Centro de Saude da Polana</option>
                    <option value="2">Centro de Saude 1 de Junho</option>
                    <option value="3">Centro de Saude Chamissava</option>
                    <option value="4">Centro de Saude da Catembe</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tipo de Entrada
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    autoComplete="country-name"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...alocacaoForm.register("tipoEntrada")}
                  >
                    <option value="1">Por concurso</option>
                    <option value="2">Por Contrato</option>
                    <option value="3">Reintegração/reingresso</option>
                    <option value="4">
                      Por transferência de outra província
                    </option>
                    <option value="5">
                      Por transferência de outro distrito da mesma província
                    </option>
                    <option value="5">Por transferência de outro sector</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data de Conclusão do Curso
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...alocacaoForm.register("anoConclusaoCurso")}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className="mt-6 grid grid-cols-8 w-full border-b border-gray-900/10">
        <div className="col-span-3" />
        <div className="col-span-5  mb-6 ">
          <div className=" flex space-x-4 items-end justify-end">
            <Button className=" w-[120px] text-white bg-red-500">
              Cancelar
            </Button>
            <Button className="bg-blue-800 w-[120px] text-white">
              Salvar
            </Button>
          </div>
        </div>
      </div>


    </div>
  );
}
