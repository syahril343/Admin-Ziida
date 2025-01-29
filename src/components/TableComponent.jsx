import Table from "react-bootstrap/Table";
import { ImBin } from "react-icons/im";
import { FaEdit } from "react-icons/fa";

function ResponsiveExample() {
  const data = [
    { name: "Alice", age: 25, city: "Jakarta", date: "12/02/2025" },
    { name: "Bob", age: 30, city: "Bandung", date: "12/02/2025" },
    { name: "Charlie", age: 28, city: "Surabaya", date: "12/02/2025" },
    { name: "Alice", age: 25, city: "Jakarta", date: "12/02/2025" },
    { name: "Bob", age: 30, city: "Bandung", date: "12/02/2025" },
    { name: "Charlie", age: 28, city: "Surabaya", date: "12/02/2025" },
    { name: "Alice", age: 25, city: "Jakarta", date: "12/02/2025" },
    { name: "Bob", age: 30, city: "Bandung", date: "12/02/2025" },
    { name: "Charlie", age: 28, city: "Surabaya", date: "12/02/2025" },
    { name: "Charlie", age: 28, city: "Surabaya", date: "12/02/2025" },
    { name: "Charlie", age: 28, city: "Surabaya", date: "12/02/2025" },
    { name: "Alice", age: 25, city: "Jakarta", date: "12/02/2025" },
    { name: "Bob", age: 30, city: "Bandung", date: "12/02/2025" },
    { name: "Charlie", age: 28, city: "Surabaya", date: "12/02/2025" },
    { name: "Charlie", age: 28, city: "Surabaya", date: "12/02/2025" },
  ];

  return (
    <Table
      responsive
      className="mt-4 ml-[20.5rem] min-h-[10rem] w-full max-w-[91rem]"
    >
      <thead className="text-md bg-gray-200">
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2 w-[4rem]">Aksi</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {data.map((item, index) => (
          <tr
            key={index}
            className="border-b border-gray-300 hover:bg-gray-100 transition"
          >
            <td className="px-4 py-2 text-center">{index + 1}</td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2 text-center">{item.age}</td>
            <td className="px-4 py-2 text-center">{item.city}</td>
            <td className="px-4 py-2 text-center">{item.date}</td>
            <td className="px-4 py-2 flex justify-center gap-2">
              <button className="bg-primary hover:bg-primary/75 text-white px-3 py-1 rounded text-xs">
                <FaEdit />
              </button>
              <button className="bg-red-500 hover:bg-red-500/75 text-white px-3 py-1 rounded text-xs">
                <ImBin />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
