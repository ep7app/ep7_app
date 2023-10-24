import { useState } from "react";

import FilterIcon from "@/assets/icons/filter.svg";
import PencilIcon from "@/assets/icons/pencil.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import EyeSlashIcon from "@/assets/icons/eyeslash.svg";

import {
  IdentificationIcon,
  WalletIcon,
  GlobeEuropeAfricaIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";

import { useNavigate } from "react-router-dom";

import { Title } from "@/components/title";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
type ITableEditButton = {
  icon: string;
};

const TableEditButton = ({ icon }: ITableEditButton) => {
  return (
    <button className="p-2 hover:rounded-full hover:bg-white">
      <img src={icon} className="w-4 fill-current" />
    </button>
  );
};

const products = [
  {
    name: "Dalton Smith",
    carreira: "Agente de educação de infância",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
  {
    name: "Mateus Smith",
    carreira: "Agente de serviço",
    tipo_entrada: "Contrato",
    provincia: "Maputo",
    distrito: "Matola",
    estabelecimento: "HP Matola",
    createdAt: "12/01/22",
  },
  {
    name: "Xande Vilas",
    carreira: "Agente de educação de infância",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
  {
    name: "Dremond Hallow",
    carreira: "Assistente técnico de orçamento e contabilidade pública",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
  {
    name: "Samantha Almicar",
    carreira: "Assistente técnico de agro-pecuária",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
  {
    name: "Smith Dalton",
    carreira: "Agente de educação de infância",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
  {
    name: "Dalton Smith",
    carreira: "Agente de educação de infância",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
  {
    name: "Dalton Smith",
    carreira: "Agente de educação de infância",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
  {
    name: "Dalton Smith",
    carreira: "Agente de educação de infância",
    tipo_entrada: "Concurso",
    provincia: "Inhambane",
    distrito: "Vilanculos",
    estabelecimento: "CS Vilas",
    createdAt: "12/01/22",
  },
];

export default function Entradas() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [viewDetails, setViewDetails] = useState<any | null>(null);

  const useNavigation = useNavigate();

  const goToNewEntry = () => useNavigation("nova-entrada", { replace: false})

  const toggleRow = (item: any) => {
    setViewDetails(item === selectedItem ? null : item);
  };

  const handleItemSelect = (item: any) => setSelectedItem(item);

  return (
    <div>
      <div className="flex justify-between items-center pb-16">
        <div>
          <Title title="Entradas" />
          <h1 className="-mt-9 max-w-md text-zinc-500 text-sm leading-6">
            Entradas no Serviço Nacional de Saúde
          </h1>
        </div>

        <Button onClick={()=> goToNewEntry()} className="bg-blue-800 w-[120px] text-white" variant={"primary"}>
        Criar
        </Button>

        {/* <Link
          to={"/entradas/nova-entrada"}
          className={cn(
            buttonVariants({ variant: "primary" }),
            "bg-blue-800 w-[120px] text-white"
          )}
        >
          Criar
        </Link> */}
      </div>

      <table className="w-full border-b border-gray-100">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="pl-10">
              <div className="flex items-center gap-x-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>Nome Completo</span>
              </div>
            </td>
            <td className="py-4 px-4 text-center">Tipo entrada</td>
            <td className="py-4 px-4 text-center">Provincia</td>
            <td className="py-4 px-4 text-center">Distrito</td>
            <td className="py-4 px-4 text-center">Estabelecimento</td>
            <td className="py-4 pr-10 pl-4 text-center">
              <img src={FilterIcon} className="w-6 h-6 fill-current" />
            </td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <>
              <tr
                key={product.name}
                className="hover:bg-blue-50 hover:text-indigo-500 transition-colors group  border-b border-gray-200 focus:ring-2"
              >
                <td className="flex gap-x-4 items-center py-4 pl-10 hover:text-indigo-500">
                  <input
                    type="checkbox"
                    checked={selectedItem === product}
                    onChange={() => handleItemSelect(product)}
                    className={
                      selectedItem === product
                        ? "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        : "hidden group-hover:flex group-hover:h-4 group-hover:w-4 group-hover:rounded group-hover:border-gray-300 group-hover:text-indigo-600 group-hover:focus:ring-indigo-500"
                    }
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {product.name}
                    </h2>
                    <div className="font-medium text-gray-400">
                      Agente de educação de infância
                    </div>
                  </div>
                </td>
                <td className="font-medium text-center text-zinc-700 tracking-tight">
                  {product.tipo_entrada}
                </td>
                <td className="font-medium text-center text-zinc-700 tracking-tight">
                  {product.provincia}
                </td>
                <td className="text-center">
                  <span className="font-medium text-zinc-700 tracking-tight">
                    {product.distrito}
                  </span>
                  {/* <span className="text-gray-400">ksjndf</span> */}
                </td>
                <td>
                  <div className="flex gap-x-2 justify-center items-center text-zinc-700 tracking-tight">
                    <IdentificationIcon className="text-indigo-300 h-5 w-5 flex-shrink-0" />
                    {product.estabelecimento}
                    {/* <a
                        href="#"
                        key={index}
                        className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        <img src={Icon} className="w-6 h-6" />
                      </a> */}
                  </div>
                </td>
                <td>
                  <span className="text-zinc-700 inline-block w-20 group-hover:hidden">
                    {product.createdAt}
                  </span>
                  <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                    {viewDetails !== product ? (
                      <button onClick={() => toggleRow(product)}>
                        <TableEditButton icon={EyeIcon} />
                      </button>
                    ) : (
                      <button onClick={() => setViewDetails(null)}>
                        <TableEditButton icon={EyeSlashIcon} />
                      </button>
                    )}

                    <TableEditButton icon={PencilIcon} />
                  </div>
                </td>
              </tr>
              {viewDetails === product && (
                <tr key={`${product.name}-{5}`}>
                  <td colSpan={6}>
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                          Detalhes do trabalhador
                        </h1>
                      </div>

                      {/* Options */}
                      <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="tracking-tight text-gray-400">
                          Dados pessoais
                        </h2>
                        <p className="text-3xl tracking-tight text-gray-900">
                          {product.name}
                        </p>
                        {/* Idade */}
                        <div className="mt-6">
                          <div className="flex items-center">
                            <div className="flex items-center pr-2">
                              <IdentificationIcon className="text-gray-300 h-5 w-5 flex-shrink-0" />
                              <h3 className="pl-1">34</h3>
                              <h6 className="ml-1 text-xs">anos</h6>
                            </div>
                            <div className="flex items-center">
                              <h2 className="tracking-tight text-gray-500 pl-2 ">
                                NUIT
                              </h2>
                              <h3 className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                2345667
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="mt-10">
                          {/* Colors */}
                          <div>
                            <h3 className="tracking-tight text-gray-400 ">
                              Nacionalidade
                            </h3>
                            <div className="flex items-center">
                              <h2 className="text-xl tracking-tight text-gray-800 pr-2 border-r-2">
                                Moçambicana
                              </h2>
                              <div className="pl-2">
                                <h2 className="rounded-full bg-indigo-500 p-2 text-xs tracking-tight text-gray-100  ">
                                  Masculino
                                </h2>
                              </div>
                            </div>
                          </div>
                          {/* Sizes */}
                          <div className="mt-10">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-gray-900">
                                Regime
                              </h3>
                              <h3 className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Nivel ocupação
                              </h3>
                            </div>
                            <div className="mt-4">
                              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-2">
                                <div className="flex justify-center items-center h-16 rounded-s border-2 border-zinc-200">
                                  <h3 className="tracking-tight text-sm text-zinc-500">
                                    Outros Regmes
                                  </h3>
                                </div>
                                <div className="flex justify-center items-center h-16 rounded-e border-2 border-zinc-200">
                                  <h3 className="tracking-tight text-sm text-zinc-500">
                                    Basico
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Editar
                          </button>
                        </div>
                      </div>
                      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                          <div className="flex items-center">
                            <WalletIcon className="text-gray-300 h-6 w-6 flex-shrink-0 pr-2" />

                            <h3 className="text-base font-medium text-gray-900 pr-2 ">
                              Carreira:
                            </h3>
                            <p className="text-base text-gray-900 p-2 ">
                              {product.carreira}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-900">
                            Highlights
                          </h3>

                          <div className="mt-6">
                            <ul
                              role="list"
                              className="list-disc space-y-2 pl-4 text-sm"
                            >
                              <li className="text-gray-400">
                                <span className="text-gray-600 pr-2">
                                  Categoria:
                                </span>
                                <span className="text-gray-600">
                                  Agente de educação de infância D
                                </span>
                              </li>

                              <li className="text-gray-400">
                                <span className="text-gray-600 pr-2">
                                  Especialidade:
                                </span>
                                <span className="text-gray-600">
                                  Acumputura
                                </span>
                              </li>

                              <li className="text-gray-400">
                                <span className="text-gray-600 pr-2">
                                  Cargo:
                                </span>
                                <span className="text-gray-600">
                                  Adido Consular
                                </span>
                              </li>

                              <li className="text-gray-400">
                                <span className="text-gray-600 pr-2">
                                  Vinculacao:
                                </span>
                                <span className="text-gray-600">
                                  PQ (provisorio)
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h2 className="text-sm font-medium text-gray-900">
                            Proveniencia
                          </h2>

                          <div className="mt-4 flex items-center">
                            <GlobeEuropeAfricaIcon className="text-gray-300 h-6 w-6 flex-shrink-0 pr-2" />

                            <h3 className="text-base font-medium text-gray-900 pr-0 ">
                              Provincia:
                            </h3>
                            <p className="text-base text-gray-900 p-2 pr-2 border-r-2">
                              {product.provincia}
                            </p>
                            <p className="text-base text-gray-900 p-2 pr-2 ">
                              {product.distrito}
                            </p>

                            <BuildingOffice2Icon className="text-gray-300 h-6 w-6 flex-shrink-0 pr-2" />
                            <h3 className="text-base font-medium text-gray-900 pr-0 ">
                              Estabelecimento:
                            </h3>
                            <p className="text-base text-gray-900 p-2 pr-2 border-r-2">
                              {product.estabelecimento}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h2 className="text-sm font-medium text-gray-900">
                            Details
                          </h2>

                          <div className="mt-4 flex items-center">
                            <div className="flex items-center pr-2">
                              <CheckBadgeIcon className="text-green-400 h-5 w-5 flex-shrink-0" />
                              <h3 className="pl-1 text-gray-500 tracking-tight text-sm">
                                Apresentado
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
