import { FaRegUserCircle } from "react-icons/fa";
import Pagination from "react-bootstrap/Pagination";
import Alert from "../../../components/UiComponents/Alert";

const initialData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    Message: "Baik",
    harga: 12000,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    Message: "Sangat Baik",
    harga: 50000,
  },
  {
    id: 3,
    name: "Robert Brown",
    email: "robert@example.com",
    Message: "Kurang Baik",
    harga: 10000,
  },
  {
    id: 4,
    name: "Emily Clark",
    email: "emily@example.com",
    Message: "Baik",
    harga: 12000,
  },
  {
    id: 5,
    name: "Michael Green",
    email: "michael@example.com",
    Message: "Baik",
    harga: 15000,
  },
  {
    id: 6,
    name: "Sarah White",
    email: "sarah@example.com",
    Message: "Sangat Baik",
    harga: 45000,
  },
  {
    id: 7,
    name: "Chris Blue",
    email: "chris@example.com",
    Message: "Kurang Baik",
    harga: 13000,
  },
  {
    id: 8,
    name: "Anna Yellow",
    email: "anna@example.com",
    Message: "Baik",
    harga: 20000,
  },
  {
    id: 9,
    name: "Anna Yellow",
    email: "anna@example.com",
    Message: "Baik",
    harga: 20000,
  },
  {
    id: 10,
    name: "Anna Yellow",
    email: "anna@example.com",
    Message: "Baik",
    harga: 20000,
  },
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [editData, setEditData] = useState({
    id: null,
    name: "",
    email: "",
    message: "",
    harga: "",
  });
  const [formMode, setFormMode] = useState("create");
  const [currentPage, setCurrentPage] = useState(1);
  const [alert, setAlert] = useState(null); // State untuk alert
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          className="bg-primary text-white shadow-md px-3 py-1 rounded-md font-semibold"
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return (
      <Pagination className="paggination flex gap-3 p-2">{items}</Pagination>
    );
  };

  // Fungsi untuk menambah data baru
  const handleCreate = () => {
    if (
      !editData.name ||
      !editData.email ||
      !editData.message ||
      !editData.harga
    )
      return;
    const newId = data.length ? data[data.length - 1].id + 1 : 1;
    const newData = {
      id: newId,
      name: editData.name,
      email: editData.email,
      message: editData.message,
      harga: editData.harga,
    };
    setData([...data, newData]);
    setEditData({ id: null, name: "", email: "", message: "", harga: "" });
    setAlert({ message: "Data berhasil ditambahkan!", type: "success" }); // Menampilkan alert sukses
  };

  // Fungsi untuk mengedit data yang ada
  const handleUpdate = () => {
    setData(
      data.map((item) =>
        item.id === editData.id
          ? {
              ...item,
              name: editData.name,
              email: editData.email,
              message: editData.message,
              harga: editData.harga,
            }
          : item
      )
    );
    setEditData({ id: null, name: "", email: "", message: "", harga: "" });
    setFormMode("create");
    setAlert({ message: "Data berhasil diperbarui!", type: "success" }); // Menampilkan alert sukses
  };

  // Fungsi untuk menghapus data
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    setAlert({ message: "Data berhasil dihapus!", type: "error" }); // Menampilkan alert error
  };

  // Fungsi untuk mengisi form dengan data yang ingin diedit
  const handleEdit = (row) => {
    setEditData({
      id: row.id,
      name: row.name,
      email: row.email,
      message: row.Message,
      harga: row.harga,
    });
    setFormMode("update");
  };

  // Fungsi untuk menutup alert
  const handleCloseAlert = () => setAlert(null);

  return (
    <div className="App p-6 ml-[15rem]">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-4">Admin Ziida</h1>
        <div className="mr-7 flex items-center gap-2">
          <FaRegUserCircle className="text-xl" />
          <span>I'm Ziida</span>
        </div>
      </div>

      {/* Alert */}
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={handleCloseAlert}
          duration={3000}
        />
      )}

      {/* Form untuk Create atau Update */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {formMode === "create" ? "" : "Update Data"}
        </h2>
        <input
          type="text"
          className="border p-2 mr-2 outline-none rounded-lg shadow-md"
          value={editData.name}
          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          placeholder="Nama"
        />
        <input
          type="email"
          className="border p-2 mr-2 outline-none rounded-lg shadow-md"
          value={editData.email}
          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="text"
          className="border p-2 mr-2 outline-none rounded-lg shadow-md"
          value={editData.message}
          onChange={(e) =>
            setEditData({ ...editData, message: e.target.value })
          }
          placeholder="Message"
        />
        <input
          type="text"
          className="border p-2 mr-2 outline-none rounded-lg shadow-md"
          value={editData.harga}
          onChange={(e) => setEditData({ ...editData, harga: e.target.value })}
          placeholder="Harga"
        />
        <button
          onClick={formMode === "create" ? handleCreate : handleUpdate}
          className="bg-primary text-white p-2 rounded-lg shadow-md"
        >
          {formMode === "create" ? "Tambah" : "Update"}
        </button>
      </div>

      {/* Tabel Data */}
      <div className="containTabel overflow-x-auto max-w-full rounded-xl shadow-xl bg-green-100">
        <table className="min-w-full text-[12px] font-medium table-auto border-collapse">
          <thead className="text-[16px]">
            <tr className="bg-green-300">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Nama</th>
              <th className="border p-3 text-center">Email</th>
              <th className="border p-3 text-center">Message</th>
              <th className="border p-3 text-center">Harga</th>
              <th className="border p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="border p-3 text-center">{row.id}</td>
                <td className="border p-3">{row.name}</td>
                <td className="border p-3">{row.email}</td>
                <td className="border p-3">{row.Message}</td>
                <td className="border p-3 text-center">{row.harga}</td>
                <td className="border p-3 text-center">
                  <button
                    onClick={() => handleEdit(row)}
                    className="bg-primary text-white p-2 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="bg-black text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 max-w-screen-lg renderPagination">
        {renderPagination()}
      </div>
    </div>
  );
};

export default App;
