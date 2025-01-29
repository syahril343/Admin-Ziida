import { FaUserCircle } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-around py-8 px-4">
      <div className="mr-[20rem]">
        <h3 className="font-semibold text-3xl">Dashboard</h3>
      </div>
      <div className="flex items-center gap-2 -mr-[20rem]">
        <div className="text-2xl"><FaUserCircle /></div>
        <h4 className="font-semibold">Im Ziida</h4>
      </div>
    </div>
  );
};

export default HeaderComponent;
