import { FaUserCircle } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-around py-8 px-4 bg-slate-300">
      <div className="mr-[20rem] fixed mr-[67rem]">
        <h3 className="font-semibold text-3xl">Dashboard</h3>
      </div>
      <div className="flex items-center gap-2 ml-[95rem] fixed">
        <div className="text-2xl"><FaUserCircle /></div>
        <h4 className="font-semibold">Im Ziida</h4>
      </div>
    </div>
  );
};

export default HeaderComponent;
