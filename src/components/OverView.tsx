import {
  ScaleIcon,
  ArrowPathRoundedSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import {Title} from "./title";

const Statements = [
  {
    id: "accountBalance",
    name: "Account Balance",
    icon: <ScaleIcon />,
    amount: "$30.659.79",
    href: "#",
  },
  {
    id: "pedding",
    name: "Pedding",
    icon: <ArrowPathRoundedSquareIcon />,
    amount: "-$19.500.00",
    href: "#",
  },
  {
    id: "processed",
    name: "Processed (last 30 days)",
    icon: <CheckCircleIcon />,
    amount: "$20.000",
    href: "#",
  },
];

export default function OverView() {
  return (
    <div>
      <Title title="Overview" />

      <div className="flex space-x-8 mt-4">
        {Statements.map((statement) => (
          <div
            key={statement.id}
            className="grid grid-cols-1 border border-gray-200 rounded w-[360px] h-[150px] bg-white shadow-sm"

          >
            <div className="flex space-x-4 items-center py-6">
              <div className="text-gray-400 w-16 px-4">{statement.icon}</div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-400 font-light">
                  {statement.name}
                </div>
                <div className="text-gray-800 font-bold">
                  {statement.amount}
                </div>
              </div>
            </div>
            <button className="text-zinc-700 font-medium text-sm bg-zinc-50 hover:text-blue-800 pl-4 py-2 flex items-center">
              View All
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
