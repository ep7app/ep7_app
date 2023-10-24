import { Title } from "./title";

import { BanknotesIcon } from "@heroicons/react/24/outline";

const Transactions = [
  {
    id: 1,
    receiver: "Person 1",
    amount: "$20000.00",
    status: "success",
    date: "Jan 01, 2023",
  },
  {
    id: 2,
    receiver: "Person 2",
    amount: "$20000.00",
    status: "failed",
    date: "Jan 01, 2023",
  },
  {
    id: 3,
    receiver: "Person 3",
    amount: "$20000.00",
    status: "success",
    date: "Jan 01, 2023",
  },
  {
    id: 4,
    receiver: "Person 4",
    amount: "$20000.00",
    status: "pedding",
    date: "Jan 01, 2023",
  },
  {
    id: 5,
    receiver: "Person 5",
    amount: "$20000.00",
    status: "success",
    date: "Jan 01, 2023",
  },
];

export default function Activity() {
  return (
    <div>
      <Title title="Recent Activitiy" />

      <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  // indeterminate="indeterminate"
                />

      <div className="mt-4 w-fulf border rounded-md border-zinc-100 bg-white">
        <table className="table-auto flex flex-col divide-y-2">
          <thead className="px-6 py-4 bg-zinc-50">
            <tr className="text-gray-900 font-medium grid grid-cols-5">
              <td className="col-span-2">Transaction</td>
              <td className="col-span-1 grid justify-items-end">Amount</td>
              <td className="col-span-1 grid justify-items-end">Status</td>
              <td className="col-span-1 grid justify-items-end">Date</td>
            </tr>
          </thead>
          <tbody className="flex flex-col divide-y-2">
            {Transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="px-6 py-3 text-sm text-zinc-400 grid grid-cols-5 "
              >
                <td className=" col-span-2 space-x-4 flex">
                  <div className="w-6 ">
                    <BanknotesIcon />
                  </div>
                  <div className="px-2">Payment To {transaction.receiver}</div>
                </td>
                <td className="grid justify-items-end">
                  <div className="flex flex-row">
                    <span className="font-bold text-zinc-900">
                      {transaction.amount}
                    </span>
                    USD
                  </div>
                </td>
                <td className="grid justify-items-end items-center">
                  {/* {" "} */}
                  <span
                    className={`${
                      transaction.status === "success"
                        ? "bg-green-300 text-green-500"
                        : "bg-red-300 text-red-500"
                    } ${
                      transaction.status === "pedding" &&"bg-yellow-300 text-yellow-900"
                    }  rounded-full w-auto py-1 px-2 text-xs text-center`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="grid justify-items-end">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
