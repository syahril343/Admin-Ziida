import { dummyData } from "./dummy";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


export const data = dummyData.map((dummy) => ({
    id: dummy.id,
    title: dummy.nim,
    director: dummy.nama,
    year: dummy.email,
    action: (
      <div className="text-2xl gap-2 justify-between">
        <a href=""><button className="text-primary p-2 mr-1"><FaEdit /></button></a>
        <button className="text-red-900 p-2 ml-2"><RiDeleteBin5Fill /></button>
      </div>
    ),
  }));