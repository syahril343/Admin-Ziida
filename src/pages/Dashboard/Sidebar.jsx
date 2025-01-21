import { RxDashboard } from "react-icons/rx";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar text-white w-52 h-full bg-gradient-to-br from-primary to-secondary">
      <div className="font-semibold mx-4 my-12">
        <h2 className="text-3xl text-center">Ziida</h2>
      </div>
      <ul className="my-[8rem] text-lg">
        <a href="" onClick={() => handleButtonClick("dashboard")}>
          <div className="flex items-center p-2 ml-4  rounded-md rounded-tr-none rounded-br-none  gap-3 hover:bg-white hover:text-primary">
            <div className="text-lg">
              <RxDashboard />
            </div>
            <li className="font-semibold">Dashboard</li>
          </div>
        </a>
        <a href="">
          <div className="flex items-center p-2 ml-4 hover:bg-white rounded-md rounded-tr-none rounded-br-none hover:text-primary gap-3">
            <div className="text-lg">
              <RxDashboard />
            </div>
            <li className="font-semibold">Dashboard</li>
          </div>
        </a>
        <a href="">
          <div className="flex items-center p-2 ml-4 hover:bg-white rounded-md rounded-tr-none rounded-br-none hover:text-primary gap-3">
            <div className="text-lg">
              <RxDashboard />
            </div>
            <li className="font-semibold">Dashboard</li>
          </div>
        </a>

        <a href="/">
          <div className="flex items-center my-64 p-2 ml-4 rounded-md rounded-tr-none rounded-br-noney gap-3">
            <div className="text-lg">
              <TbLogout />
            </div>
            <li className="font-semibold">Logout</li>
          </div>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
