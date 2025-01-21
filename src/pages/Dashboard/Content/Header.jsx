import { HiMenu, HiUserCircle } from "react-icons/hi"; // Menggunakan react-icons

const Header = ({ toggleSidebar }) => {
  return (
    <header className="-z-20 bg-transparent text-white p-4 flex items-center justify-between md:px-6">
      {/* Logo atau Nama Aplikasi */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          <HiMenu />
        </button>
        <div className="text-left font-bold">
          <span className="text-black">Company</span>Name
        </div>
      </div>

      {/* User Profile / Notifications */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300">
          <HiUserCircle className="text-3xl text-primary" />
        </button>
        <div className="hidden md:block">
          <span className="text-sm text-primary font-semibold">Admin Name</span>
        </div>
      </div>
    </header>
  );
};

export default Header;



