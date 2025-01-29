import { FaPlus } from "react-icons/fa";

const TableComponent = () => {
  return (
    <div className="flex justify-around gap-[20rem]">
      {/* button tambah data */}
      <div>
        <button
          type="button"
          className="bg-primary hover:bg-primary/75 duration-200 text-white flex items-center gap-2 rounded-lg py-2 px-4"
        >
          <FaPlus />
          <h4 className="text-white">Tambah</h4>
        </button>
      </div>
      {/* button tambah data */}

      {/* Search bar */}
      <div className="flex items-center gap-2 -mr-[12rem]">
        <div>
          <input
            className="py-2 outline-none border px-4 rounded-lg"
            type="text"
            placeholder="Search data"
          />
        </div>
        <button
          type="button"
          className="bg-primary hover:bg-primary/75 duration-200 text-white rounded-lg py-2 px-4"
        >
          Cari
        </button>
      </div>
      {/* Search bar */}
    </div>
  );
};

export default TableComponent;
