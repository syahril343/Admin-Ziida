import DataTable from "react-data-table-component";
import { data } from "../assets/data";
import { useState } from "react";
// import icons
import { FaPlus } from "react-icons/fa";

const columns = [
  {
    name: "NIM",
    selector: (row) => row.title,
  },
  {
    name: "Nama",
    selector: (row) => row.director,
  },
  {
    name: "Tahun",
    selector: (row) => row.year,
  },
  {
    name: "Aksi",
    selector: (row) => row.action,
  },
];

const customStyle = {
  headCells: {
    style: {
      backgroundColor: "#29A648",
      color: "white",
      fontSize: "17px",
      fontWeight: "bolder",
    },
  },
};

const CobaTabelComponent = () => {
  const [records, setRecords] = useState(data);

  const handleChange = (e) => {
    let query = e.target.value;
    const newrecords = data.filter((item) =>
      item.director.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setRecords(newrecords);
  };

  return (
    <div className="px-[0.5rem] py-3 w-[91rem] rounded-xl ml-[20rem]">
      <div className="flex justify-between mb-4">
        <a href="" className="flex gap-2 p-3 items-center bg-primary hover:bg-primary/75 duration-200 text-white rounded-lg">
          <button className="font-semibold">
            Tambah Data
          </button>
          <FaPlus />
        </a>
        <input
          type="text"
          className="outline-none rounded-lg border-2 border-primary p-2"
          placeholder="Search By Name"
          onChange={handleChange}
        />
      </div>
      <DataTable columns={columns} data={records} customStyles={customStyle} />
    </div>
  );
};

export default CobaTabelComponent;
