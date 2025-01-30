import Sidebar from "../../components/SidebarComponent";
import Header from "../../components/HeaderComponent";
// import SearchBar from "../../components/SearchBarComponent";
import CobaTabelComponent from "../../components/CobaTabelComponent";


const Dashboard = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        {/* <SearchBar /> */}
        <CobaTabelComponent />
      </div>
    </div>
  );
};

export default Dashboard;
